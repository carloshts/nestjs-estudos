import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NestJS estudos')
    .setDescription('Api Rest de estudos em NestJS')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //app.enableCors();
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT || 3000);
  //Forçando build dnv
}
bootstrap();
