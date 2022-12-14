"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH', 'OPTIONS'],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NestJS estudos')
        .setDescription('Api Rest de estudos em NestJS')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map