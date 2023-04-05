import { MigrationInterface, QueryRunner } from "typeorm";
export declare class changeDateInPosts1680406805639 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
