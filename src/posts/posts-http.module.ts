import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsModule } from './posts.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PostsModule, UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsHttpModule {}
