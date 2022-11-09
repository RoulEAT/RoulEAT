"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurants = void 0;
const getRestaurants = (request, response) => {
    console.log(request.params);
    console.log(request.body);
    console.log(request.query);
    try {
        return;
    }
    catch (error) {
        console.log(error, 'THIS IS THE ERRROR CHEIF');
    }
};
exports.getRestaurants = getRestaurants;
