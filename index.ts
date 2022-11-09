import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';

import yelpRoutes from './routes/yelp-routes';

dotenv.config();

const app: Express = express();
const baseUrl = '/api/web/v1';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(`${baseUrl}/yelp`, yelpRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Spinning the wheel on port ${port}`);
});
