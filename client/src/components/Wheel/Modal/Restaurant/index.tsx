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
import RestaurantPrice from './RestaurantPrice';
import RestaurantRating from './RestaurantRating';

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
        <RestaurantPrice restaurantPrice={restaurant.price}/>
        <RestaurantRating restaurantRating={restaurant.rating} />
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

