import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.repo.create(createCategoryDto);
    return this.repo.save(category);
  }

  findAll() {
    const categories = this.repo.find();
    return categories;
  }

  findOne(id: number) {
    const category = this.repo.findOne(id);
    return category;
  }

  async update(id: number, updateCategoryDto: Partial<Category>) {
    const category = await this.repo.findOne(id);
    Object.assign(category, updateCategoryDto);
    return this.repo.save(category);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
