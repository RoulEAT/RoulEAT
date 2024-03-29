"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortedRestaurants = void 0;
const getMiles = (meters) => {
    return Number((meters * 0.000621371192).toFixed(2));
};
const getSortedRestaurants = (restaurants) => {
    const typedRestaurants = restaurants.map((restaurant) => {
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
            image: restaurant.image_url,
            phone: restaurant.phone,
            transactions: restaurant.transactions,
            distance: getMiles(restaurant.distance),
        };
    });
    const openRestaurants = typedRestaurants.sort((a, b) => Number(a.isClosed) - Number(b.isClosed));
    return openRestaurants.sort((a, b) => Number(a.distance) - Number(b.distance));
};
exports.getSortedRestaurants = getSortedRestaurants;
