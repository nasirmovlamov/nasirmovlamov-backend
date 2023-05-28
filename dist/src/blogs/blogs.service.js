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
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const blog_entity_1 = require("./entities/blog.entity");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const categories_service_1 = require("../categories/categories.service");
const tags_service_1 = require("../tags/tags.service");
let BlogsService = class BlogsService {
    constructor(blogsRepository, categoriesService, tagsService) {
        this.blogsRepository = blogsRepository;
        this.categoriesService = categoriesService;
        this.tagsService = tagsService;
    }
    async create(createBlogDto) {
        const base64Data = createBlogDto.fileBase64.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        const filePath = (0, path_1.join)(__dirname, '..', 'uploads', `${createBlogDto.title.toLowerCase().replace(/\s/g, '_')}.mdx`);
        const uploadsDir = (0, path_1.join)(__dirname, '..', 'uploads');
        await (0, promises_1.mkdir)(uploadsDir, { recursive: true });
        await (0, promises_1.writeFile)(filePath, Buffer.from(base64Data, 'base64'));
        const allCategories = await this.categoriesService.findAll();
        const allTags = await this.tagsService.findAll();
        const createdBlog = await this.blogsRepository.create({
            title: createBlogDto.title,
            description: createBlogDto.description,
            categories: allCategories,
            tags: allTags,
            file_path: filePath,
        });
        return await this.blogsRepository.save(createdBlog);
    }
    async findAll() {
        return await this.blogsRepository.find({
            relations: ['tags', 'categories'],
        });
    }
    async findOne(id) {
        return await this.blogsRepository.findOne({
            where: { id },
            relations: ['tags', 'categories'],
        });
    }
    async update(id, updateBlogDto) {
        return await this.blogsRepository.update(id, updateBlogDto);
    }
    async remove(id) {
        return await this.blogsRepository.delete(id);
    }
};
BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.Blog)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        categories_service_1.CategoryService,
        tags_service_1.TagsService])
], BlogsService);
exports.BlogsService = BlogsService;
//# sourceMappingURL=blogs.service.js.map