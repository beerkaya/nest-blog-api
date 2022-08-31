import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { UsersHttpModule } from './users/users-http.module';
import { PostsModule } from './posts/posts.module';
import { PostCommentsModule } from './post_comments/post_comments.module';
import { PostMetasModule } from './post_metas/post_metas.module';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    AppModule,
    UsersHttpModule,
    PostsModule,
    PostCommentsModule,
    PostMetasModule,
    TagsModule,
    CategoriesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppHttpModule {}
