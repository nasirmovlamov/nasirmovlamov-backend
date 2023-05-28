"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("./entities/role.entity");
const typeorm_2 = require("typeorm");
const permissions_service_1 = require("../permissions/permissions.service");
let RolesService = class RolesService {
    constructor(rolesRepository, permissionsService) {
        this.rolesRepository = rolesRepository;
        this.permissionsService = permissionsService;
    }
    async create(createRoleDto) {
        const getPermissions = await this.permissionsService.findWithIds(createRoleDto.permissions);
        const createdRole = await this.rolesRepository.create({
            name: createRoleDto.name,
            permissions: getPermissions,
        });
        return await this.rolesRepository.save(createdRole);
    }
    async findAll() {
        return await this.rolesRepository.find({
            relations: ['permissions'],
        });
    }
    async findOne(id) {
        return await this.rolesRepository.findOne({
            where: { id },
            relations: ['permissions'],
        });
    }
    async findWithIds(ids) {
        return await this.rolesRepository.findBy({ id: (0, typeorm_2.In)([...ids]) });
    }
    async update(id, updateRoleDto) {
        const getPermissions = await this.permissionsService.findWithIds(updateRoleDto.permissions);
        const allPermissions = await this.permissionsService.findAll();
        const updatedRole = await this.rolesRepository.update(id, {
            name: updateRoleDto.name,
        });
        const updatedRolePermissions = await this.rolesRepository
            .createQueryBuilder()
            .relation(role_entity_1.Role, 'permissions')
            .of(id)
            .addAndRemove(getPermissions, allPermissions);
        const getUpdatedRole = await this.rolesRepository.findOne({
            where: { id },
            relations: ['permissions'],
        });
        return getUpdatedRole;
    }
    async remove(id) {
        return await this.rolesRepository.delete(id);
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        permissions_service_1.PermissionsService])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map