import { Test, TestingModule } from '@nestjs/testing';
import { PostMetasService } from './post_metas.service';

describe('PostMetasService', () => {
  let service: PostMetasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostMetasService],
    }).compile();

    service = module.get<PostMetasService>(PostMetasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
