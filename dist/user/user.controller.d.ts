import { Mensagem } from './../commons/interfaces/mensagens';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<UpdateUserDto | Mensagem>;
    findAll(): Promise<import("./entities/user.entity").User[]> | Mensagem;
    findAllByFilter(nome: string): Promise<import("./entities/user.entity").User[]> | Mensagem;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    getByNomeESenha(nome: string, senha: string): Promise<import("./entities/user.entity").User> | Mensagem;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User> | Mensagem;
    remove(id: string): Promise<Mensagem>;
}
