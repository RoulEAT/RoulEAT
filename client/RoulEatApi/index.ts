import * as axios from 'axios'
import { buildUrl } from './navigation-helpers';

const apiV1 = axios.default.create({
  baseURL: buildUrl(`/api/web/v1`),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

class RoulEatApi {
  static getRestaurants(term: string, location: string) {
    return apiV1.post('/yelp/get-restaurants', { term, location });
  }
}

