import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  GreetRequest as _randomPackage_GreetRequest,
  GreetRequest__Output as _randomPackage_GreetRequest__Output,
} from '../randomPackage/GreetRequest';
import type {
  GreetResponse as _randomPackage_GreetResponse,
  GreetResponse__Output as _randomPackage_GreetResponse__Output,
} from '../randomPackage/GreetResponse';

export interface GreetServiceClient extends grpc.Client {
  Greet(
    argument: _randomPackage_GreetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  Greet(
    argument: _randomPackage_GreetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  Greet(
    argument: _randomPackage_GreetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  Greet(
    argument: _randomPackage_GreetRequest,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  greet(
    argument: _randomPackage_GreetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  greet(
    argument: _randomPackage_GreetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  greet(
    argument: _randomPackage_GreetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
  greet(
    argument: _randomPackage_GreetRequest,
    callback: grpc.requestCallback<_randomPackage_GreetResponse__Output>,
  ): grpc.ClientUnaryCall;
}

export interface GreetServiceHandlers
  extends grpc.UntypedServiceImplementation {
  Greet: grpc.handleUnaryCall<
    _randomPackage_GreetRequest__Output,
    _randomPackage_GreetResponse
  >;
}

export interface GreetServiceDefinition extends grpc.ServiceDefinition {
  Greet: MethodDefinition<
    _randomPackage_GreetRequest,
    _randomPackage_GreetResponse,
    _randomPackage_GreetRequest__Output,
    _randomPackage_GreetResponse__Output
  >;
}
