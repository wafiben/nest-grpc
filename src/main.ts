import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'randomPackage',
        protoPath:
          'C:/Users/wafib/OneDrive/Bureau/project-client-nest/src/proto/service.proto',
      },
    },
  );
  await app.listen();
}
bootstrap();
