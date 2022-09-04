import { Module } from '@nestjs/common';
import { PostMetasService } from './post-metas.service';
import { PostMetasController } from './post-metas.controller';
import { PostMetasModule } from './post-metas.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PostMetasModule, PostsModule],
  controllers: [PostMetasController],
  providers: [PostMetasService],
  exports: [PostMetasService],
})
export class PostMetasHttpModule {}
