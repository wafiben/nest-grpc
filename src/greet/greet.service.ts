import * as grpc from '@grpc/grpc-js';
import { GreetServiceHandlers } from 'src/proto/randomPackage/randomPackage/GreetService';
import type {
  GreetRequest as _randomPackage_GreetRequest,
  GreetRequest__Output as _randomPackage_GreetRequest__Output,
} from 'src/proto/randomPackage/randomPackage/GreetRequest';

import type {
  GreetResponse as _randomPackage_GreetResponse,
  GreetResponse__Output as _randomPackage_GreetResponse__Output,
} from 'src/proto/randomPackage/randomPackage/GreetResponse';

class GreetService implements GreetServiceHandlers {
  [name: string]: grpc.UntypedHandleCall;
  Greet(
    call: grpc.ServerUnaryCall<
      _randomPackage_GreetRequest__Output,
      _randomPackage_GreetResponse
    >,
    callback: grpc.sendUnaryData<_randomPackage_GreetResponse__Output>,
  ) {
    const request = call.request;
    const response = { greeting: `Hello, ${request.name}!` };
    callback(null, response);
  }
}

export default GreetService;
