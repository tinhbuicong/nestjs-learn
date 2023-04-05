import { Report } from "../reports/report.entity";
import { Post } from "../posts/entities/post.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    admin: boolean;
    reports: Report[];
    posts: Post[];
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
