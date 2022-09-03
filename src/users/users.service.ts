import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;

    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOneOrFail({
      where: { id: id },
    });
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.usersRepository.findOneOrFail({
      where: { username: username },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneOrFail({ where: { id: id }});
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;

    return await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.usersRepository.findOneByOrFail({ id });
    await this.usersRepository.softDelete(id);
  }
}