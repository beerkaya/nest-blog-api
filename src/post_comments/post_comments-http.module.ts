import { Module } from '@nestjs/common';
import { PostCommentsService } from './post_comments.service';
import { PostCommentsController } from './post_comments.controller';
import { PostCommentsModule } from './post_comments.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PostCommentsModule, PostsModule],
  controllers: [PostCommentsController],
  providers: [PostCommentsService],
  exports: [PostCommentsService],
})
export class PostCommentsHttpModule {}
