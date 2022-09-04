import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Post } from "src/posts/entities/post.entity";
import { Exists } from "src/utils/validator/exists.validator";
import { PostComment } from "../entities/post-comment.entity";

export class CreatePostCommentDto {
    @IsString()
    @IsOptional()
    @Exists(Post)
    postId: string;

    @IsString()
    @IsOptional()
    @Exists(PostComment)
    parentId: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsOptional()
    @IsBoolean()
    isPublished: boolean;
}
