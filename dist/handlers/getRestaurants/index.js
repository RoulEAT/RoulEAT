"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurants = void 0;
const getRestaurants = (request, response) => {
    console.log(request.params);
    console.log(request.body);
    console.log(request.query);
    try {
    }
    catch (error) {
        console.log(error);
    }
};
exports.getRestaurants = getRestaurants;
