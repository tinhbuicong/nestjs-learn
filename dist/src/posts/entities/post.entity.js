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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const category_entity_1 = require("../../categories/entities/category.entity");
const user_entity_1 = require("../../users/user.entity");
const typeorm_1 = require("typeorm");
let Post = class Post {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.Category, (category) => category.posts),
    __metadata("design:type", category_entity_1.Category)
], Post.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.posts),
    __metadata("design:type", user_entity_1.User)
], Post.prototype, "user", void 0);
Post = __decorate([
    typeorm_1.Entity()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map