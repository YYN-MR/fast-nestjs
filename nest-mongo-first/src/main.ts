import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Nestjs with mongodb demo')
    .setDescription('Nestjs Mongodb入门')
    .setVersion('0.0.1')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('swagger-ui', app, swaggerDocument);

  await app.listen(3000);
  console.log("http://localhost:3000/swagger-ui")
}
bootstrap();
