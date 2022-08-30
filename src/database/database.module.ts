/* eslint-disable @typescript-eslint/no-unused-vars */
import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';

@Module({
  exports: [...databaseProviders],
  providers: [...databaseProviders],
})
export class DatabaseModule {}
