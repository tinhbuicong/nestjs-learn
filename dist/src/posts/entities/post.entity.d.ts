import { Category } from "../../categories/entities/category.entity";
import { User } from "../../users/user.entity";
export declare class Post {
    id: number;
    title: string;
    category: Category;
    createdAt: Date;
    image: string;
    description: string;
    user: User;
}
