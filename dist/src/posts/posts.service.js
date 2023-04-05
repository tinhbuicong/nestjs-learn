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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const post_entity_1 = require("./entities/post.entity");
const category_entity_1 = require("../categories/entities/category.entity");
let PostsService = class PostsService {
    constructor(repo, repoCategory) {
        this.repo = repo;
        this.repoCategory = repoCategory;
    }
    async create(createPostDto, user) {
        const post = await this.repo.create(createPostDto);
        const category = await this.repoCategory.findOne(createPostDto.categoryId);
        post.category = category;
        post.user = user;
        return this.repo.save(post);
    }
    findAll() {
        const posts = this.repo.find({ relations: ["category", "user"] });
        return posts;
    }
    findOne(id) {
        return `This action returns a #${id} post`;
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(post_entity_1.Post)),
    __param(1, typeorm_2.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map