import React from 'react';
import './styles.css';

interface RestaurantRatingProps {
  restaurantRating: number;
}

const RestaurantRating = (props: RestaurantRatingProps) => {
  const { restaurantRating } = props;
  return (
    <div className='RestaurantRating'>
      {Array.from({ length: Math.ceil(restaurantRating) }).map((_, index) => (
        <img
          src='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'
          alt='meaningful text'
          key={index}
        />
      ))}
    </div>
  );
}

export default RestaurantRating;
