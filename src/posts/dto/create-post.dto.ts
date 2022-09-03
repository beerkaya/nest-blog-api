import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { Exists } from "src/utils/validator/exists.validator";
import { Post } from "../entities/post.entity";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    summary: string;

    @IsOptional()
    @IsBoolean()
    isPublished: boolean;

    @IsOptional()
    @IsString()
    @Exists(User)
    userId: string;

    @IsOptional()
    @IsString()
    @Exists(Post)
    parentId: string;
}
