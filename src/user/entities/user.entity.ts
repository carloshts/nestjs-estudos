/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';
@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  nome: string;
  @Column()
  senha: string;
}
