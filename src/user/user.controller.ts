import { Mensagem } from './../commons/interfaces/mensagens';
import { ObjectID } from 'typeorm';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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
    try {
      const usuario: UpdateUserDto = await this.userService.create(createUserDto);
      return usuario;
    } catch (error) {
      return new Mensagem("Erro ao cadastrar usuário")
    }
    
  }
  
  @ApiOkResponse({
    description: 'Lista de usuários!',
    type: UpdateUserDto,
    isArray: true
  })
  @Get()
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      return new Mensagem("Erro ao listar usuários")
    }
    
  }
  @ApiOkResponse({
    description: 'Lista de usuários por filtros!',
    type: UpdateUserDto,
    isArray: true
  })
  @Get('filtrar')
  findAllByFilter(@Query('nome') nome: string) {
    try {
      return this.userService.findByFilter(nome);
    } catch (error) {
      return new Mensagem("Erro ao listar usuários")
    }
    
  }

  @ApiOkResponse({
    description: 'Usuário unico!',
    type: UpdateUserDto,
    isArray: false
  })
  @Get('id/:id')
  findOne(@Param('id') id: string) {
    try {
      return this.userService.findOne(id)
    } catch (error) {
      new Mensagem("Erro ao pesquisar usuário por id")
    }
    
  }
  
  @Get('login')
  getByNomeESenha(@Query("nome") nome: string, @Query("senha") senha: string){
    
    try {
      return this.userService.findByNomeESenha(nome,senha)
    } catch (error) {
      console.log(error)
      return new Mensagem("Erro ao pesquisar usuário por nome e senha")
    }
  }
  @ApiOkResponse({
    description: 'Usuário atualizado com sucesso!',
    type: UpdateUserDto,
    isArray: false
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.userService.update(id, updateUserDto);
    } catch (error) {
      console.log(error)
      return new Mensagem("Erro ao atualizar")
    }
    
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
