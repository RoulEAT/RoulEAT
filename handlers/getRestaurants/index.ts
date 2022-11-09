import { Request, Response } from 'express';
import axios from 'axios';

export const getRestaurants = (request: Request, response: Response) => {
  console.log(request.params);
  console.log(request.body);
  console.log(request.query);
  try {
  } catch (error) {
    console.log(error, 'THIS IS THE ERRROR CHEIF');
  }
};
