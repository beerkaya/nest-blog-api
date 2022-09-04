import { Test, TestingModule } from '@nestjs/testing';
import { PostMetasController } from './post-metas.controller';
import { PostMetasService } from './post-metas.service';

describe('PostMetasController', () => {
  let controller: PostMetasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostMetasController],
      providers: [PostMetasService],
    }).compile();

    controller = module.get<PostMetasController>(PostMetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
