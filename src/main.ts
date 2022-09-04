import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppHttpModule } from './app-http.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { EntityNotFoundFilter } from './utils/exception-filters/entity-not-found.filter';
import { HttpExceptionFilter } from './utils/exception-filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppHttpModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new EntityNotFoundFilter);
  app.useGlobalGuards(new JwtAuthGuard(new Reflector()));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
