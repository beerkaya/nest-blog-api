import { IsOptional, IsString } from "class-validator";
import { Post } from "src/posts/entities/post.entity";
import { Exists } from "src/utils/validator/exists.validator";

export class CreatePostMetaDto {
    @IsString()
    @IsOptional()
    key: string;
    
    @IsString()
    @IsOptional()
    content: string;

    @IsString()
    @IsOptional()
    @Exists(Post)
    postId: string;
}
