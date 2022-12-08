import React from 'react';
import './styles.css';
import { MdLocationOn } from 'react-icons/md';

interface RestaurantHeaderProps {
  restaurantName: string;
  restaurantAddress: string;
}

const RestaurantHeader = (props: RestaurantHeaderProps) => {
  const { restaurantName, restaurantAddress } = props;

  return (
    <>
      <h1>{restaurantName}</h1>
      <h2>
        <MdLocationOn /> {restaurantAddress}
      </h2>
    </>
  );
};

export default RestaurantHeader;
