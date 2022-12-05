import React from 'react';
import Location from './Location';
import Logo from './Logo';
import './styles.css';

interface LandingPageProps {
  setLocation: (location: string | undefined) => void;
}

const LandingPage = (props: LandingPageProps) => {

  const { setLocation } = props;

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
        <Location setLocation={setLocation}/>
      </div>
    </div>
  );
};

export default LandingPage;
