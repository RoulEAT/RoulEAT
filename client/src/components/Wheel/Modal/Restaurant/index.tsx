import React from 'react';
import './styles.css';
import { GetRestaurantResponse } from '../../../../API/useGetRestaurants';
import { GiPathDistance } from 'react-icons/gi';
import {
  AiFillPhone,
} from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';
import RestaurantHeader from './RestaurantHeader';
import RestaurantInfoLine from './RestaurantInfoLine';
import RestaurantAvailability from './RestaurantAvailability';

interface RestaurantProps {
  restaurant: GetRestaurantResponse;
}

const Restaurant = (props: RestaurantProps) => {
  const { restaurant } = props;

  return (
    <div className='Restaurant'>
      <div className='RestaurantInfo'>
        <RestaurantHeader
          restaurantName={restaurant.name}
          restaurantAddress={restaurant.location.address1}
        />
        <RestaurantInfoLine
          icon={<GiPathDistance />}
          info={`${restaurant.distance} Miles`}
        />
        <RestaurantInfoLine icon={<AiFillPhone />} info={restaurant.phone} />
        <RestaurantAvailability restaurantAvailability={restaurant.transactions} />
        {restaurant.price && (
          <h3>
            {Array.from({ length: restaurant.price.length }).map((_, index) => (
              <FaDollarSign key={index} />
            ))}
          </h3>
        )}
        <div className='RestaurantRating'>
          {Array.from({ length: Math.ceil(restaurant.rating) }).map(
            (_, index) => (
              <img
                src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
                alt='meaningful text'
                key={index}
              />
            )
          )}
        </div>
      </div>
      <div className='RestaurantImage'>
        <img
          src={restaurant.image}
          alt='meaningful text about blind guys lololololoooololololololl cause theyre blind'
        />
      </div>
    </div>
  );
};

export default Restaurant;

