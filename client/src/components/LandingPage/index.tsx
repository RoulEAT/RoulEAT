import React from 'react';
import Location from './Location';
import Logo from './Logo';
import './styles.css';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Logo />
      <div className='Container'>
        <h1
          style={{
            color: 'white   ',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          YERRRRR SPIN THAT WHEEL FAM
        </h1>
        <Location />
      </div>
    </div>
  );
};

export default LandingPage;
