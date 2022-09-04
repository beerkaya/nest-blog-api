import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaDto } from './dto/create-post_meta.dto';
import { UpdatePostMetaDto } from './dto/update-post_meta.dto';
import { PostMeta } from './entities/post_meta.entity';

@Injectable()
export class PostMetasService {
  constructor(
    @InjectRepository(PostMeta)
    private postMetasRepository: Repository<PostMeta>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}

  async create(createPostMetaDto: CreatePostMetaDto): Promise<PostMeta> {
    const postMeta = new PostMeta();
    postMeta.key = createPostMetaDto.key;
    postMeta.content = createPostMetaDto.content;

    postMeta.post = await this.postsRepository.findOneByOrFail({ id: createPostMetaDto.postId });
    return await this.postMetasRepository.save(postMeta);
  }

  async findAll(): Promise<PostMeta[]> {
    return await this.postMetasRepository.find({
      relations: ['post']
    });
  }

  async findOne(id: string): Promise<PostMeta> {
    return await this.postMetasRepository.findOne({
      where: { id: id },
      relations: ['post']
    });
  }

  async update(id: string, updatePostMetaDto: UpdatePostMetaDto): Promise<PostMeta> {
    const postMeta = await this.postMetasRepository.findOneByOrFail({ id });
    postMeta.key = updatePostMetaDto.key;
    postMeta.content = updatePostMetaDto.content;

    const post = this.postsRepository.findOneByOrFail({ id: updatePostMetaDto.postId });
    return await this.postMetasRepository.save(postMeta);
  }

  async remove(id: string): Promise<void> {
    let entity = this.postMetasRepository.findOneByOrFail({ id });
    await this.postMetasRepository.delete(id);
  }
}
