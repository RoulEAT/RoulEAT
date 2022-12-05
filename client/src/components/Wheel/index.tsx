import React, { useState } from 'react';
import { GetRestaurantResponse, useGetRestaurants } from '../../API/useGetRestaurants';
import './styles.css';

interface WheelProps {
  location?: string
}

const Wheel = (props: WheelProps) => {

  const { location } = props;

  const { mutateAsync: getRestaurants } = useGetRestaurants();
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);
  const [restaurants, setRestaurants] = useState<GetRestaurantResponse[] | null>(null);
  //restaurants to be passed into modal component
  const [items, setItems] = useState<string[]>([
    'Pizza',
    'Burger',
    'Ramen',
    'Curry',
    'Sushi',
    'Tacos',
  ]);

  const selectItem = async () => {
    if (selectedItemIdx === null) {
      const randomIdx = Math.floor(Math.random() * items.length);
      setSelectedItemIdx(randomIdx);
      const selectedItem = items[randomIdx];
      const restaurants = await getRestaurants({
        term: selectedItem,
        location: location || 'New York, NY',
      });
      setRestaurants(restaurants);
      console.log(restaurants);
      //this functionalitiy might be the only one necessary as when we close the modal we can then reset the state of this component back to null thus losing that weird reseetting visual
    } else {
      setSelectedItemIdx(null);
      //leaving this else block so that the wheel resets properly during testing
    }
  }

  const spinning = selectedItemIdx !== null ? 'spinning' : '';

  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItemIdx,
  } as React.CSSProperties;

  return (
    <div className='wheel-container'>
      <div className={`wheel ${spinning}`} style={wheelVars} onClick={selectItem}>
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
  );
};

export default Wheel;
