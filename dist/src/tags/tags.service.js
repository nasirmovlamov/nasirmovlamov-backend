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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const tag_entity_1 = require("./entities/tag.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TagsService = class TagsService {
    constructor(tagsRepository) {
        this.tagsRepository = tagsRepository;
    }
    async create(createTagDto) {
        const newTag = await this.tagsRepository.create(createTagDto);
        return await this.tagsRepository.save(newTag);
    }
    async findAll() {
        return await this.tagsRepository.find();
    }
    async findOne(id) {
        return await this.tagsRepository.findOne({
            where: { id },
        });
    }
    async update(id, updateTagDto) {
        return await this.tagsRepository.update(id, updateTagDto);
    }
    async remove(id) {
        return await this.tagsRepository.delete(id);
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map