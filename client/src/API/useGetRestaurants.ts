import {useMutation} from 'react-query'
import { RoulEatApi } from './RealEatApi'

interface GetRestaurantParams {
  term: string
  location: string
}

interface BusinessLocation {
  address1: string;
  address2?: string;
  zip_code: string;
}

export interface GetRestaurantResponse {
  id: string;
  name: string;
  url: string;
  price: string;
  rating: number;
  isClosed: boolean;
  location: BusinessLocation;
  image: string;
  phone: string;
  transactions: string[];
  distance: number;
}

export const useGetRestaurants = () => {
  return useMutation((params: GetRestaurantParams) => getRestaurant(params), {
    retry: false,
  })
}

const getRestaurant = async (params: GetRestaurantParams): Promise<GetRestaurantResponse[]> => {
  const response = await RoulEatApi.getRestaurants(params.term, params.location)
  return response.data
}
