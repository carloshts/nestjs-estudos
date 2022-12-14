import { MongoRepository } from 'typeorm';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: MongoRepository<User>
  ) {

  }
  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.nome = createUserDto.nome;
    user.senha = createUserDto.senha;
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const _id = new ObjectID(id)
    return await this.userRepository.findOne({
      where: {
        _id: _id
      }
    })
  }
  async findByFilter(nome?:string):Promise<User[]>{
    const query = new User();
    if(nome) query.nome = nome
    console.log(query)
    return await this.userRepository.find({where:query})
  }
  async findByNomeESenha(nome:string,senha:string):Promise<User>{
    return await this.userRepository.findOne({
      where:{
        nome:nome,
        senha:senha
      }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user: User = await this.userRepository.findOne({
      where: {
        _id: new ObjectID(id)
      }
    })
    if (user) {
      user._id = new ObjectID(id);
      user.nome = updateUserDto.nome;
      user.senha = updateUserDto.senha;
      await this.userRepository.updateOne({ _id: new ObjectID(id) }, {
        $set: user
      });
      return this.userRepository.findOne({
        where: {
          _id: new ObjectID(id)
        }
      })
    } else {
      return null;
    }

  }

  remove(id: string) {
    return this.userRepository.delete({ _id: new ObjectID(id) });
  }
}
