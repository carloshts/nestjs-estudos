import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH', 'OPTIONS'],
  });
  const config = new DocumentBuilder()
    .setTitle('NestJS estudos')
    .setDescription('Api Rest de estudos em NestJS')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    customCssUrl: `src/assets/swagger/swagger-ui.css`,
  });
  // Habilita o CORS
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept, x-access-token,delete,entries,foreach,get,has,keys,set,values,Authorization',
  //   );
  //   res.header(
  //     'Access-Control-Allow-Methods',
  //     'GET, POST, PUT, DELETE, OPTIONS',
  //   );
  //   next();
  // });
  await app.listen(process.env.PORT || 3000);
  //Forçando build dnv
}
bootstrap();
