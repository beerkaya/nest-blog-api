import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;

    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;

    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}