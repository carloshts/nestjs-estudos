import { Mensagem } from './../commons/interfaces/mensagens';
import { ObjectID } from 'typeorm';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'Usuário salvo com sucesso!',
    type: UpdateUserDto,
    isArray: false
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const usuario: UpdateUserDto = await this.userService.create(createUserDto);
    return usuario;
  }
  
  @ApiOkResponse({
    description: 'Lista de usuários!',
    type: UpdateUserDto,
    isArray: true
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOkResponse({
    description: 'Usuário unico!',
    type: UpdateUserDto,
    isArray: false
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  @ApiOkResponse({
    description: 'Usuário atualizado com sucesso!',
    type: UpdateUserDto,
    isArray: false
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOkResponse({
    description: 'Usuário deletado com sucesso!',
    type: Mensagem,
    isArray: false
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const user = await this.userService.findOne(id);
      if(user) await this.userService.remove(id);
      else return new Mensagem("Usuário não encontrado")
      return new Mensagem("Usuário deletado com sucesso")
    } catch (error) {
      return new Mensagem("Erro ao deletar usuário")
    }
  }
}
