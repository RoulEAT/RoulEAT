import React from 'react';
import wheelLogo from './logo512.png';
import rouleatLogo from './rouleat.png';
import './styles.css';

const Logo = () => {
  return (
    <div className='LogoContainer'>
      <div className='WheelLogo'>
        <img src={wheelLogo} alt='logo' />
      </div>
      <div className='RoulEatLogo'>
        <img src={rouleatLogo} alt='rouleat' />
      </div>
    </div>
  );
};

export default Logo;
