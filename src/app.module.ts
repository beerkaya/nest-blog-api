import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'mysql2/typings/mysql';
import { DataSource } from 'typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get<ConnectionOptions>('database'),
      inject: [ConfigService],
    })
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(this.dataSource.options);
  }
}
