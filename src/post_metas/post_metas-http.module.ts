import { Module } from '@nestjs/common';
import { PostMetasService } from './post_metas.service';
import { PostMetasController } from './post_metas.controller';
import { PostMetasModule } from './post_metas.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PostMetasModule, PostsModule],
  controllers: [PostMetasController],
  providers: [PostMetasService],
  exports: [PostMetasService],
})
export class PostMetasHttpModule {}
