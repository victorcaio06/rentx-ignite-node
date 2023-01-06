import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { AppDataSource } from './database/app-data-source';
import { router } from './routes';
import swaggerFile from './swagger.json';

AppDataSource.initialize()
  .then(() => {
    console.log('Data source has been initialized');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

import './shared/container';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333);
