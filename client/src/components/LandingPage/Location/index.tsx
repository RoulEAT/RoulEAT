import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

interface LocationProps {
  setLocation: (location: string | undefined) => void;
}

const Location = (props: LocationProps) => {

  const { setLocation } = props;

  const navigate = useNavigate();
  const [address, setAddress] = useState<string | undefined>('');
  const [error, setError] = useState<string | undefined>('');

  const handleSubmit = async (address: string | undefined) => {
    try {
      setError('');
      if (!address) {
        setError('Please Enter an Address.');
      }
      setLocation(address);
      setError('');
      navigate('/wheel');
    } catch (error) {
      console.log(error)
      setError(error as string);
    }
  };

  return (
    <>
      <div className='LocationContainer'>
        <input
          className='LocationInput'
          placeholder='Delivery Address'
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className='LocationButton'
          onClick={() => handleSubmit(address)}
        >
          Submit
        </button>
      </div>
      {error && <span className='LocationError'>{error}</span>}
    </>
  );
};

export default Location;
