import { Request, Response } from 'express';
import axios from 'axios';
import { getSortedRestaurants, YelpResponse } from './helpers';

export const getRestaurants = async (request: Request, response: Response) => {
  const { term, location } = request.body;

  try {
    const { data: yelpResponse } = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );

    const sortedRestaurants: YelpResponse[] = getSortedRestaurants(
      yelpResponse.businesses
    );

    return response.status(200).json(sortedRestaurants);

  } catch (error) {
    console.log(error, 'ERROR');
    return response.status(500).json({ error });
  }
};
