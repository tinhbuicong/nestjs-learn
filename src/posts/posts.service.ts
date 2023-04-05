import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { User } from "../users/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";
import { Category } from "../categories/entities/category.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private repo: Repository<Post>,
    @InjectRepository(Category) private repoCategory: Repository<Category>
  ) {}

  async create(createPostDto: CreatePostDto, user: User) {
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

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
