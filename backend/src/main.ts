// backend/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // グローバルなバリデーションパイプの設定
  app.useGlobalPipes(new ValidationPipe());

  // Swaggerドキュメントの設定
  const config = new DocumentBuilder()
    .setTitle('Knowledge API')
    .setDescription('The Knowledge API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // CORSの有効化
  app.enableCors();

  // ポート番号の設定
  await app.listen(3000);
}
bootstrap();
