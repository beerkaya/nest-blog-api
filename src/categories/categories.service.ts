import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new Category();
    category.title = createCategoryDto.title;
    category.content = createCategoryDto.content;

    return await this.categoriesRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoriesRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoriesRepository.findOneByOrFail({ id });
    category.title = updateCategoryDto.title;
    category.content = updateCategoryDto.content;

    return await this.categoriesRepository.save(category);
  }

  async remove(id: string) {
    let entity = await this.categoriesRepository.findOneByOrFail({ id });
    await this.categoriesRepository.delete(id);
  }
}
