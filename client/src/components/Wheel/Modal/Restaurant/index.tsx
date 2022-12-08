import React from 'react';
import './styles.css';
import { GetRestaurantResponse } from '../../../../API/useGetRestaurants';
import { GiPathDistance } from 'react-icons/gi';
import {
  AiFillPhone,
  AiFillCheckCircle,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';
import RestaurantHeader from './RestaurantHeader';

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
        <h3>
          <GiPathDistance /> {restaurant.distance} Miles
        </h3>
        <h3>
          <AiFillPhone /> {restaurant.phone}
        </h3>
        <>
          <h3>
            {restaurant.transactions.includes('pickup') ? (
              <AiFillCheckCircle />
            ) : (
              <AiFillCloseCircle />
            )}{' '}
            Pickup
          </h3>
          <h3>
            {restaurant.transactions.includes('delivery') ? (
              <AiFillCheckCircle />
            ) : (
              <AiFillCloseCircle />
            )}{' '}
            Delivery
          </h3>
        </>
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

// distance: 0.15
// id: "oDB5B9w2emjU9pbPP573QA"
// isClosed: false
// location: {address1: '293 Main St', address2: '', zip_code: '11050'}
// name: "Ayhan's Mediterranean Marketplace"
// phone: "+15167671400"
// price: "$$"
// rating: 3.5
// transactions: ['pickup']
// url: "https://www.yelp.com/biz/ayhans-mediterranean-marketplace-port-washington-2?adjust_creative=QnuTCz66nxju6Av9ENgsbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QnuTCz66nxju6Av9ENgsbA"
