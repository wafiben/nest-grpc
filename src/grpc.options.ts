import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'randomPackage',
    protoPath: join(__dirname, 'proto', 'service.proto'),
  },
};
