import * as express from 'express';
import { getRestaurants } from '../handlers/getRestaurants';

const router = express.Router();

router.get('./get-restaurants', getRestaurants);

export default router;
