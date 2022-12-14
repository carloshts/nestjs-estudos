import { ObjectID } from 'typeorm';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  public _id: string;
  @ApiProperty()
  public nome: string;
  @ApiProperty()
  public senha: string;
}
