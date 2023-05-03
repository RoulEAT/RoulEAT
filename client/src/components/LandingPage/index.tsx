import React from 'react';
import Location from './Location';
import Logo from './Logo';
import './styles.css';
import Footer from '../Footer';

interface LandingPageProps {
  setLocation: (location: string | undefined) => void;
}

const LandingPage = (props: LandingPageProps) => {
  const { setLocation } = props;

  return (
    <div className='LandingPage'>
      <Logo />
      <div className='Container'>
        <Location setLocation={setLocation} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
