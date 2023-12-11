import { Controller, Get } from '@nestjs/common';
import GreetService from '../greet/greet.service';
import * as grpc from '@grpc/grpc-js';

import type {
  GreetRequest as _randomPackage_GreetRequest,
  GreetRequest__Output as _randomPackage_GreetRequest__Output,
} from '../proto/randomPackage/randomPackage/GreetRequest';

import type {
  GreetResponse as _randomPackage_GreetResponse,
  GreetResponse__Output as _randomPackage_GreetResponse__Output,
} from '../proto/randomPackage/randomPackage/GreetResponse';

@Controller('greet')
export class GreetController {
  constructor(private readonly greetService: GreetService) {}
  @Get()
  greet(
    call: grpc.ServerUnaryCall<
      _randomPackage_GreetRequest,
      _randomPackage_GreetResponse
    >,
    callback: grpc.sendUnaryData<_randomPackage_GreetResponse>,
  ) {
    return this.greetService.Greet(call, callback);
  }
}
