import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>
  ) {}

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = new Tag();
    tag.title = createTagDto.title;
    tag.content = createTagDto.content;

    return await this.tagsRepository.save(tag);
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagsRepository.find();
  }

  async findOne(id: string): Promise<Tag> {
    return await this.tagsRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    const tag = await this.tagsRepository.findOneByOrFail({ id });
    tag.title = updateTagDto.title;
    tag.content = updateTagDto.content;

    return await this.tagsRepository.save(tag);
  }

  async remove(id: string): Promise<void> {
    let entity = await this.tagsRepository.findOneByOrFail({ id });
    await this.tagsRepository.delete(id);
  }
}
