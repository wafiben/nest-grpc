/* import {  Client, Transport } from '@nestjs/microservices'; */
import { join } from 'path';
 // Update the import path based on your generated files
/* import { Injectable } from '@nestjs/common';
import {GreetService } from"./greet.service" */

/* @Injectable()
@Client({
  transport: Transport.GRPC,
  options: {
    package: 'randomPackage',
    protoPath: join(__dirname, 'service.proto'),
  }
},client: any) 
export class GreetClient extends ClientGrpc {
  private service: GreetService;

  constructor() {
    super();
    this.service = this.service<GreetService>('GreetService');
  }

  async connect() {
    await this.start();
  }

  async close() {
    await this.close();
  }

  greet(request: { name: string }): Promise<{ greeting: string }> {
    return this.service.greet(request).toPromise();
  }
}
 */