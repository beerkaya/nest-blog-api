import { Unique } from "typeorm";

export class CreateUserDto {
    firstName: string;
    
    lastName: string;

    @Unique("username_unique", ["username"])
    username: string;

    @Unique("email_unique", ["email"])
    email: string;

    password: string;
}
