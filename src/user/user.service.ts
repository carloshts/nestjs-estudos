import { MongoRepository, ObjectID } from 'typeorm';
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository:MongoRepository<User>
    ){

  }
  create(createUserDto: CreateUserDto):Promise<User> {
    const user:User = new User();
    user.nome = createUserDto.nome;
    user.senha = createUserDto.senha;
    return this.userRepository.save(createUserDto);
  }

  findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string):Promise<User> {
    return this.userRepository.findOneBy( {_id:id});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user:User = new User();
    user._id = id;
    user.nome = updateUserDto.nome;
    user.senha = updateUserDto.senha;
    return this.userRepository.update({_id:id},updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete({_id:id});
  }
}
