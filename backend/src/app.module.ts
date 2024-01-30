import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AuthModule from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import {JwtModule} from '@nestjs/jwt'
import { GithubModule } from './scrape/github/github.module';


@Module({
  imports: [AuthModule, DatabaseModule,GithubModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
