import React, { useState } from 'react';
import './styles.css';

const Wheel = () => {

  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);
  const [foodCategory, setFoodCategory] = useState<string | null>(null);
  const [items, setItems] = useState<string[]>([
    'Pizza',
    'Burger',
    'Ramen',
    'Curry',
    'Sushi',
    'Tacos',
  ]);

  const selectItem = () => {
    if (selectedItemIdx === null) {
      const randomIdx = Math.floor(Math.random() * items.length);
      setSelectedItemIdx(randomIdx);
      const selectedItem = items[randomIdx];
      setFoodCategory(selectedItem);
    } else {
      setSelectedItemIdx(null);
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
