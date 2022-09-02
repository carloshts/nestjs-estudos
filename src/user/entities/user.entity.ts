/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  nome: string;
  @Column()
  senha: string;
}
