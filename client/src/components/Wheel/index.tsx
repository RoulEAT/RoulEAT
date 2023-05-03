import React, { useEffect, useState } from 'react';
import {
  GetRestaurantResponse,
  useGetRestaurants,
} from '../../API/useGetRestaurants';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Modal from './Modal/index';

interface WheelProps {
  location?: string;
}

const Wheel = (props: WheelProps) => {
  const { location } = props;
  const navigate = useNavigate();

  const { mutateAsync: getRestaurants } = useGetRestaurants();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const [restaurants, setRestaurants] = useState<
    GetRestaurantResponse[] | null
  >(null);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [items, setItems] = useState<string[]>([
    'Italian',
    'American',
    'Japanese',
    'Indian',
    'Mexican',
    'Chinese',
  ]);

  useEffect(() => {
    if (!location) {
      navigate('/');
    }
  }, [location, navigate]);

  const selectItem = async () => {
    try {
      if (selectedItemIndex === null) {
        const randomIndex = Math.floor(Math.random() * items.length);

        setSelectedItemIndex(randomIndex);

        const selectedItem = items[randomIndex];
        const restaurants = await getRestaurants({
          term: selectedItem,
          location: location || 'New York, NY',
        });

        setRestaurants(restaurants);
        setTimeout(() => {
          setModalOpen(true);
        }, 4500);
      } else {
        setSelectedItemIndex(null);
        //leaving this else block so that the wheel resets properly during testing
      }
    } catch (error) {
      navigate('/');
      //error handling in the case nothing is returned from the API
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItemIndex(null);
    setRestaurants(null);
  };

  const spinning = selectedItemIndex !== null ? 'spinning' : '';

  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItemIndex,
  } as React.CSSProperties;

  return (
    <div className='Wheel'>
      <p className='wheel-text-mobile'>TAP TO SPIN!</p>
      <p className='wheel-text'>CLICK TO SPIN!</p>
      {!modalOpen && (
        <div className='wheel-container'>
          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={selectItem}
          >
            {items.map((item, index) => (
              <div
                className='wheel-item'
                key={index}
                style={{ '--item-nb': index } as React.CSSProperties}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
      {restaurants && modalOpen && (
        <Modal restaurants={restaurants} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Wheel;
