import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostMetasService } from './post-metas.service';
import { CreatePostMetaDto } from './dto/create-post-meta.dto';
import { UpdatePostMetaDto } from './dto/update-post-meta.dto';

@Controller('post-metas')
export class PostMetasController {
  constructor(private readonly postMetasService: PostMetasService) {}

  @Post()
  create(@Body() createPostMetaDto: CreatePostMetaDto) {
    return this.postMetasService.create(createPostMetaDto);
  }

  @Get()
  findAll() {
    return this.postMetasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postMetasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostMetaDto: UpdatePostMetaDto) {
    return this.postMetasService.update(id, updatePostMetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postMetasService.remove(id);
  }
}
