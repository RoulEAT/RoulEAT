interface BusinessLocation {
  address1: String;
  address2?: String;
  zip_code: String;
}

export interface YelpResponse {
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
      distance: restaurant.distance,
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
