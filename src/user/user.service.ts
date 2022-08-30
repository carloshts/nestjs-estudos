/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository:Repository<User>
    ){

  }
  create(createUserDto: CreateUserDto):Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number):Promise<User> {
    return this.userRepository.findOneBy({id:id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id:id},updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({id:id});
  }
}
