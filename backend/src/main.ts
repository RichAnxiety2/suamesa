import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefixo global
  app.setGlobalPrefix('api');

  // ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS
  const corsOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',')
    : ['http://localhost:3000', 'http://192.168.101.15:3000'];

  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Sua Mesa API')
    .setDescription('API para gerenciamento de mesas e comandas')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Backend rodando em http://0.0.0.0:${port}`);
  console.log(`📚 Swagger disponível em http://localhost:${port}/api/docs`);
}

bootstrap();
