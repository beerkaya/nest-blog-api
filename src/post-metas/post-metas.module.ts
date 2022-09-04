import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostMeta } from './entities/post-meta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostMeta])],
  exports: [TypeOrmModule],
})
export class PostMetasModule {}
