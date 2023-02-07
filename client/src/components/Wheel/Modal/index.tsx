import React from 'react';
import './styles.css';
import Restaurant from './Restaurant/index';
import { GetRestaurantResponse } from '../../../API/useGetRestaurants';
import CloseButton from './CloseButton';

interface ModalProps {
  restaurants: GetRestaurantResponse[];
  closeModal: () => void;
}

const Modal = (props: ModalProps) => {
  const { restaurants, closeModal } = props;

  return (
    <div className='ModalContainer'>
      <div className='Modal'>
        <CloseButton closeModal={closeModal} />
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
