import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetController } from './greet/greet.controller';
import GreetService from './greet/greet.service';

@Module({
  imports: [],
  controllers: [AppController, GreetController],
  providers: [AppService, GreetService],
})
export class AppModule {}
