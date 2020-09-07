import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['dist/**/*.entity.js'], // compiled JS files
      entitiesTs: ['src/**/*.entity.ts'], // TS source files
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      dbName: 'test_db',
      user: 'test_user',
      password: 'test_password',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
