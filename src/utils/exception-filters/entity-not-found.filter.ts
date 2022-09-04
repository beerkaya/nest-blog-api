import { ExceptionFilter, Catch, ArgumentsHost} from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError, TypeORMError } from 'typeorm';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let errorMessage: string = (exception as TypeORMError).message;
    let model: string = RegExp(/type \"(.+?)\"/g).exec(errorMessage)[1];
    let message: string = `Cannot find ${model} with id: ${request.params.id}`;

    const status = 404;

    response
      .status(200)
      .json({
        statusCode: status,
        message: message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}