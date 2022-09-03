import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: MongoRepository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findByFilter(nome?: string): Promise<User[]>;
    findByNomeESenha(nome: string, senha: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
