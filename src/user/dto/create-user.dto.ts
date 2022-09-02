import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  public nome: string;
  @ApiProperty()
  public senha: string;
}
