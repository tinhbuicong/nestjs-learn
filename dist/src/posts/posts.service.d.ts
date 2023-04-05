import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { User } from "../users/user.entity";
import { Repository } from "typeorm";
import { Post } from "./entities/post.entity";
import { Category } from "../categories/entities/category.entity";
export declare class PostsService {
    private repo;
    private repoCategory;
    constructor(repo: Repository<Post>, repoCategory: Repository<Category>);
    create(createPostDto: CreatePostDto, user: User): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
