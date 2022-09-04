import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostComment } from './entities/post_comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostComment])],
  exports: [TypeOrmModule],
})
export class PostCommentsModule {}
