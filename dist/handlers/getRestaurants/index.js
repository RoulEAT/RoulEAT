"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurants = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./helpers");
const getRestaurants = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(request.params);
    console.log(request.body);
    console.log(request.query);
    const { term, location } = request.body;
    try {
        const { data: yelpResponse } = yield axios_1.default.get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer ${process.env.YELP_API_KEY}`,
            },
        });
        const sortedRestaurants = (0, helpers_1.getSortedRestaurants)(yelpResponse.businesses);
        console.log(sortedRestaurants);
        return response.status(200).json(sortedRestaurants);
    }
    catch (error) {
        console.log(error, 'THIS IS THE ERROR CHIEF');
        return response.status(500).json({ error });
    }
});
exports.getRestaurants = getRestaurants;
