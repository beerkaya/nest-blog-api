import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { UsersHttpModule } from './users/users-http.module';
import { PostCommentsHttpModule } from './post_comments/post_comments-http.module';
import { PostMetasModule } from './post_metas/post_metas.module';
import { TagsHttpModule } from './tags/tags-http.module';
import { CategoriesHttpModule } from './categories/categories-http.module';
import { AuthModule } from './auth/auth.module';
import { PostsHttpModule } from './posts/posts-http.module';


@Module({
  imports: [
    AppModule,
    UsersHttpModule,
    PostsHttpModule,
    PostCommentsHttpModule,
    PostMetasModule,
    TagsHttpModule,
    CategoriesHttpModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppHttpModule {}
