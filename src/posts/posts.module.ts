import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostToCategory } from './entities/post_to_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostToCategory])],
  exports: [TypeOrmModule],
})
export class PostsModule {}
