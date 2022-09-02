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
    return this.userService.findOne(id);
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
    type: UpdateUserDto,
    isArray: true
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    
    return await this.userService.remove(id);
  }
}
