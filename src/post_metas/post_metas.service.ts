import { Injectable } from '@nestjs/common';
import { CreatePostMetaDto } from './dto/create-post_meta.dto';
import { UpdatePostMetaDto } from './dto/update-post_meta.dto';

@Injectable()
export class PostMetasService {
  create(createPostMetaDto: CreatePostMetaDto) {
    return 'This action adds a new postMeta';
  }

  findAll() {
    return `This action returns all postMetas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postMeta`;
  }

  update(id: number, updatePostMetaDto: UpdatePostMetaDto) {
    return `This action updates a #${id} postMeta`;
  }

  remove(id: number) {
    return `This action removes a #${id} postMeta`;
  }
}
