import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Unique } from "src/utils/validator/unique.validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @Unique(User)
    @IsNotEmpty()
    @IsString({ message: "Username must be a string" })
    username: string;

    @Unique(User)
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
