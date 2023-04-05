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
exports.PostDto = void 0;
const class_transformer_1 = require("class-transformer");
class PostDto {
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], PostDto.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], PostDto.prototype, "title", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Date)
], PostDto.prototype, "createAt", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], PostDto.prototype, "description", void 0);
__decorate([
    class_transformer_1.Transform(({ obj }) => obj.category.id),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], PostDto.prototype, "categoryId", void 0);
__decorate([
    class_transformer_1.Transform(({ obj }) => obj.category.name),
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], PostDto.prototype, "name", void 0);
__decorate([
    class_transformer_1.Transform(({ obj }) => obj.user.id),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], PostDto.prototype, "userId", void 0);
__decorate([
    class_transformer_1.Transform(({ obj }) => obj.user.email),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], PostDto.prototype, "email", void 0);
exports.PostDto = PostDto;
//# sourceMappingURL=post.dto.js.map