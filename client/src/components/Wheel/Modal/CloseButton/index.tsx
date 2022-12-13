import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const CloseButton = () => {
  return (
    <div className='CloseButton'>
      <IconContext.Provider value={{ color: '#efe9f4' }}><GiKnifeFork /></IconContext.Provider>
    </div>
  );
};

export default CloseButton;
