import { ApiProperty } from '@nestjs/swagger';

export class Mensagem {
  @ApiProperty()
  mensagem: string;

  constructor(mensagem: string) {
    this.mensagem = mensagem;
  }
}
