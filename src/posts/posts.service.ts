import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.title = createPostDto.title;
    post.summary = createPostDto.summary;
    post.isPublished = createPostDto.isPublished;
    post.publishedAt = post.isPublished ? new Date() : null;

    post.user = await this.usersRepository.findOneBy({ id: createPostDto.userId });
    post.parent = await this.postsRepository.findOneBy({ id: createPostDto.parentId });
    return await this.postsRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find({ relations: ['user', 'parent', 'children'] });
  }

  async findOne(id: string) {
    return await this.postsRepository.findOneOrFail({ where: { id }, relations: ['user', 'parent', 'children'] });
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postsRepository.findOneByOrFail({ id });
    post.title = updatePostDto.title;
    post.summary = updatePostDto.summary;
    post.isPublished = updatePostDto.isPublished;
    post.publishedAt = (post.isPublished && !post.publishedAt) ? new Date() 
      : (!post.isPublished ? null : post.publishedAt);

    post.user = (await this.usersRepository.findOneBy({ id: updatePostDto.userId })) ?? post.user;
    post.parent = (await this.postsRepository.findOneByOrFail({ id: updatePostDto.parentId })) ?? post.parent;
    return await this.postsRepository.save(post);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.postsRepository.findOneByOrFail({ id });
    await this.postsRepository.softDelete(id);
  }
}
