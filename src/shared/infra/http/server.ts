/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';

import { AppDataSource } from '@shared/infra/typeorm/app-data-source';
import swaggerFile from '../../../swagger.json';
import { router } from './routes';

AppDataSource.initialize()
  .then(() => {
    console.log('Data source has been initialized');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

import '@shared/container';
import { AppError } from '@shared/errors/AppError';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333);
