import React from 'react';
import './styles.css';
import Restaurant from './Restaurant/index';
import { GetRestaurantResponse } from '../../../API/useGetRestaurants';
import CloseButton from './CloseButton';

interface ModalProps {
  restaurants: GetRestaurantResponse[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  const { restaurants, setModalOpen } = props;

  return (
    <div className='ModalContainer'>
      <div className='Modal'>
        <CloseButton setModalOpen={setModalOpen}/>
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
