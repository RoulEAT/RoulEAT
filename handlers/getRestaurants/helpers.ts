interface BusinessLocation {
  address1: string;
  address2?: string;
  zip_code: string;
}

export interface YelpResponse {
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

const getMiles = (meters: number): number => {
  return Number((meters * 0.000621371192).toFixed(2));
}

export const getSortedRestaurants = (restaurants: any): YelpResponse[] => {
  const typedRestaurants = restaurants.map((restaurant: any) => {
    return {
      id: restaurant.id,
      name: restaurant.name,
      url: restaurant.url,
      price: restaurant.price,
      rating: restaurant.rating,
      isClosed: restaurant.is_closed,
      location: {
        address1: restaurant.location.address1,
        address2: restaurant.location.address2,
        zip_code: restaurant.location.zip_code,
      },
      image: restaurant.image,
      phone: restaurant.phone,
      transactions: restaurant.transactions,
      distance: getMiles(restaurant.distance),
    } as YelpResponse;
  });

  const openRestaurants = typedRestaurants.sort(
    (a: YelpResponse, b: YelpResponse) =>
      Number(a.isClosed) - Number(b.isClosed)
  );

  return openRestaurants.sort(
    (a: YelpResponse, b: YelpResponse) =>
      Number(a.distance) - Number(b.distance)
  );
};


