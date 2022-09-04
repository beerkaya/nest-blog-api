import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostToCategory } from './entities/post_to_category.entity';
import { PostToTag } from './entities/post_to_tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostToCategory, PostToTag])],
  exports: [TypeOrmModule],
})
export class PostsModule {}
