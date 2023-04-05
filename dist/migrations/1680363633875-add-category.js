"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategory1680363633875 = void 0;
class addCategory1680363633875 {
    constructor() {
        this.name = "addCategory1680363633875";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "createdAt" varchar NOT NULL, "image" varchar NOT NULL, "description" varchar NOT NULL, "categoryId" integer, "userId" integer)`);
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "createdAt" varchar NOT NULL, "image" varchar NOT NULL, "description" varchar NOT NULL, "categoryId" integer, "userId" integer, CONSTRAINT "FK_1077d47e0112cad3c16bbcea6cd" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_post"("id", "title", "createdAt", "image", "description", "categoryId", "userId") SELECT "id", "title", "createdAt", "image", "description", "categoryId", "userId" FROM "post"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`ALTER TABLE "temporary_post" RENAME TO "post"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" RENAME TO "temporary_post"`);
        await queryRunner.query(`CREATE TABLE "post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "createdAt" varchar NOT NULL, "image" varchar NOT NULL, "description" varchar NOT NULL, "categoryId" integer, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "post"("id", "title", "createdAt", "image", "description", "categoryId", "userId") SELECT "id", "title", "createdAt", "image", "description", "categoryId", "userId" FROM "temporary_post"`);
        await queryRunner.query(`DROP TABLE "temporary_post"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "post"`);
    }
}
exports.addCategory1680363633875 = addCategory1680363633875;
//# sourceMappingURL=1680363633875-add-category.js.map