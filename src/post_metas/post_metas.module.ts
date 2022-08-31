import { Module } from '@nestjs/common';
import { PostMetasService } from './post_metas.service';
import { PostMetasController } from './post_metas.controller';

@Module({
  controllers: [PostMetasController],
  providers: [PostMetasService]
})
export class PostMetasModule {}
