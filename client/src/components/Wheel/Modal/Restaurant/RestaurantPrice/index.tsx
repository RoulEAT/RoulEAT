import React from 'react';
import './styles.css';
import { FaDollarSign } from 'react-icons/fa';

interface RestaurantPriceProps {
  restaurantPrice?: string;
}

const RestaurantPrice = (props: RestaurantPriceProps) => {
  const { restaurantPrice } = props;

  if (!restaurantPrice) return null;

  return (
        <h3>
          {Array.from({ length: restaurantPrice.length }).map((_, index) => (
            <FaDollarSign key={index} />
          ))}
        </h3>
  );
}

export default RestaurantPrice;
