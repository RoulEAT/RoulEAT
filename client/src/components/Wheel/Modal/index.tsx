import React from 'react';
import './styles.css';
import Restaurant from './Restaurant/index';
import { GetRestaurantResponse } from '../../../API/useGetRestaurants';

interface ModalProps {
  restaurants: GetRestaurantResponse[];
}

const Modal = (props: ModalProps) => {
  const { restaurants } = props;

  return (
    <div className='ModalContainer'>
      <div className='Modal'>
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
