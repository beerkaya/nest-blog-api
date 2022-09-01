import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Unique } from "src/utils/validator/unique.validator";
import { Tag } from "../entities/tag.entity";

export class CreateTagDto {
    @IsNotEmpty()
    @IsString()
    @Unique(Tag)
    title: string;

    @IsOptional()
    @IsString() 
    content: string;
}
