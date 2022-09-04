import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostCommentDto } from './dto/create-post_comment.dto';
import { UpdatePostCommentDto } from './dto/update-post_comment.dto';
import { PostComment } from './entities/post_comment.entity';

@Injectable()
export class PostCommentsService {
  constructor(
    @InjectRepository(PostComment)
    private postCommentsRepository: Repository<PostComment>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}

  async create(createPostCommentDto: CreatePostCommentDto): Promise<PostComment> {
    const postComment = new PostComment();
    postComment.title = createPostCommentDto.title;
    postComment.content = createPostCommentDto.content;
    postComment.isPublished = createPostCommentDto.isPublished;
    postComment.publishedAt = postComment.isPublished ? new Date() : null;

    postComment.post = await this.postsRepository.findOneByOrFail({ id: createPostCommentDto.postId });
    postComment.parent = await this.postCommentsRepository.findOneByOrFail({ id: createPostCommentDto.parentId });

    return await this.postCommentsRepository.save(postComment);
  }

  async findAll() {
    return await this.postCommentsRepository.find({
      relations: ['post', 'parent']
    });
  }

  async findOne(id: string) {
    return (await this.postCommentsRepository.findOneOrFail({
      where: { id: id },
      relations: ['post', 'parent']
    }));
  }

  async update(id: string, updatePostCommentDto: UpdatePostCommentDto) {
    const postComment = await this.postCommentsRepository.findOneByOrFail({ id });
    postComment.title = updatePostCommentDto.title;
    postComment.content = updatePostCommentDto.content;
    postComment.isPublished = updatePostCommentDto.isPublished;
    postComment.publishedAt = (postComment.isPublished && !postComment.publishedAt) ? new Date() 
      : (!postComment.isPublished ? null : postComment.publishedAt);

    postComment.post = await this.postsRepository.findOneByOrFail({ id: updatePostCommentDto.postId });
    postComment.parent = await this.postCommentsRepository.findOneByOrFail({ id: updatePostCommentDto.parentId });

    return await this.postCommentsRepository.save(postComment);
  }

  async remove(id: string): Promise<void> {
    let entity = await this.postCommentsRepository.findOneByOrFail({ id });
    await this.postCommentsRepository.delete(id);
  }
}
