import { Request, Response } from 'express';
import axios from 'axios';

// interface YelpResponse {
// }

export const getRestaurants = async (request: Request, response: Response) => {
  console.log(request.params);
  console.log(request.body);
  console.log(request.query);
  const { term, location } = request.body;

  try {
    const {data: yelpResponse} = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );

    console.log(yelpResponse.businesses);
    return response.status(200).json(yelpResponse.businesses);
  } catch (error) {
    console.log(error, 'THIS IS THE ERRROR CHEIF');
  }
};
