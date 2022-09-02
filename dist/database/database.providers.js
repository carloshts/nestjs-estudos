"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const posix_1 = require("path/posix");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mongodb',
                url: 'mongodb+srv://carlos:wRk3jtlhC0GDtJZU@cluster0.qo9qggv.mongodb.net/?retryWrites=true&w=majority',
                entities: [(0, posix_1.join)(__dirname, '**/**.entity{.ts,.js}')],
                synchronize: true,
                useNewUrlParser: true,
                logging: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map