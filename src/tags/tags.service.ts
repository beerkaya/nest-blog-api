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
  create(createTagDto: CreateTagDto) {
    const tag = new Tag();
    tag.title = createTagDto.title;
    tag.content = createTagDto.content;

    return this.tagsRepository.save(tag);
  }

  findAll(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  findOne(id: string) {
    return this.tagsRepository.findOneBy({ id });
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    const tag = await this.tagsRepository.findOneBy({ id });
    tag.title = updateTagDto.title;
    tag.content = updateTagDto.content;

    return this.tagsRepository.save(tag);
  }

  async remove(id: string): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}
