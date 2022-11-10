import {useMutation} from 'react-query'
import { RoulEatApi } from './RealEatApi'

interface GetRestaurantParams {
  term: string
  location: string
}

interface BusinessLocation {
  address1: String;
  address2?: String;
  zip_code: String;
}

export interface GetRestaurantResponse {
  id: String;
  name: String;
  url: String;
  price: String;
  rating: Number;
  isClosed: Boolean;
  location: BusinessLocation;
  image: String;
  phone: String;
  transactions: String[];
  distance: Number;
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
