import { Module } from '@nestjs/common';
import { PostCommentsService } from './post-comments.service';
import { PostCommentsController } from './post-comments.controller';
import { PostCommentsModule } from './post-comments.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PostCommentsModule, PostsModule],
  controllers: [PostCommentsController],
  providers: [PostCommentsService],
  exports: [PostCommentsService],
})
export class PostCommentsHttpModule {}
