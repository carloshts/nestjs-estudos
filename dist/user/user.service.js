"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const mongodb_1 = require("mongodb");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(createUserDto) {
        const user = new user_entity_1.User();
        user.nome = createUserDto.nome;
        user.senha = createUserDto.senha;
        return this.userRepository.save(createUserDto);
    }
    findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const _id = new mongodb_1.ObjectID(id);
        return await this.userRepository.findOne({
            where: {
                _id: _id
            }
        });
    }
    async findByFilter(nome) {
        const query = new user_entity_1.User();
        if (nome)
            query.nome = nome;
        console.log(query);
        return await this.userRepository.find({ where: query });
    }
    async findByNomeESenha(nome, senha) {
        return await this.userRepository.findOne({
            where: {
                nome: nome,
                senha: senha
            }
        });
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                _id: new mongodb_1.ObjectID(id)
            }
        });
        if (user) {
            user._id = new mongodb_1.ObjectID(id);
            user.nome = updateUserDto.nome;
            user.senha = updateUserDto.senha;
            await this.userRepository.updateOne({ _id: new mongodb_1.ObjectID(id) }, {
                $set: user
            });
            return this.userRepository.findOne({
                where: {
                    _id: new mongodb_1.ObjectID(id)
                }
            });
        }
        else {
            return null;
        }
    }
    remove(id) {
        return this.userRepository.delete({ _id: new mongodb_1.ObjectID(id) });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map