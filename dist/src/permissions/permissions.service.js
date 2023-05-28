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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const permission_entity_1 = require("./entities/permission.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PermissionsService = class PermissionsService {
    constructor(permissionsRepository) {
        this.permissionsRepository = permissionsRepository;
    }
    async create(createPermissionDto) {
        const newPermission = await this.permissionsRepository.create(createPermissionDto);
        return await this.permissionsRepository.save(newPermission);
    }
    async findAll() {
        return await this.permissionsRepository.find();
    }
    async findOne(id) {
        return await this.permissionsRepository.findOne({
            where: { id },
        });
    }
    async findWithIds(ids) {
        return await this.permissionsRepository.findBy({ id: (0, typeorm_1.In)([...ids]) });
    }
    async update(id, updatePermissionDto) {
        return await this.permissionsRepository.update(id, updatePermissionDto);
    }
    async remove(id) {
        return await this.permissionsRepository.delete(id);
    }
};
PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PermissionsService);
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map