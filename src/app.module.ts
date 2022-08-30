import { join } from 'path/posix';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      url: 'mongodb+srv://vercel-admin-user:canunes20@cluster0.a9vwmjq.mongodb.net/nestjs?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      useUnifiedTopology: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
