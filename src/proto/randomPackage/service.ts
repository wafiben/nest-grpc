import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreetServiceClient as _randomPackage_GreetServiceClient, GreetServiceDefinition as _randomPackage_GreetServiceDefinition } from './randomPackage/GreetService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  randomPackage: {
    GreetRequest: MessageTypeDefinition
    GreetResponse: MessageTypeDefinition
    GreetService: SubtypeConstructor<typeof grpc.Client, _randomPackage_GreetServiceClient> & { service: _randomPackage_GreetServiceDefinition }
  }
}

