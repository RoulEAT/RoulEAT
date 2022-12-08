import React from 'react';
import './styles.css';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

interface RestaurantAvailabilityProps {
  restaurantAvailability: string[];
}

const RestaurantAvailability = (props: RestaurantAvailabilityProps) => {
  const { restaurantAvailability } = props;
  return (
    <>
      <h3>
        {restaurantAvailability.includes('pickup') ? (
          <AiFillCheckCircle />
        ) : (
          <AiFillCloseCircle />
        )}{' '}
        Pickup
      </h3>
      <h3>
        {restaurantAvailability.includes('delivery') ? (
          <AiFillCheckCircle />
        ) : (
          <AiFillCloseCircle />
        )}{' '}
        Delivery
      </h3>
    </>
  );
}

export default RestaurantAvailability;
