/* import { GreetService } from './greet.service';
import { Module, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

@Module({
  providers: [GreetService],
})
export class GreetModule implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly greetClient: any) {}

  async onModuleInit() {
    await this.greetClient.connect();
    console.log('Connected to gRPC server');
  }

  async onModuleDestroy() {
    await this.greetClient.close();
    console.log('Closed connection to gRPC server');
  }
}
 */