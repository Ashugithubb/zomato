import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown fields
      forbidNonWhitelisted: true, // throws error on unknown fields
      transform: true, // auto-transform types (e.g., string -> number)
      forbidUnknownValues: true, // important for Enums
    }),
  );


  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true, 
  });
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

//npm run migration:generate -- src/migrations/addedManyTables
//npm run migration:run