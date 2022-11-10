import React, { useState } from 'react';
///import { useNavigate } from 'react-router-dom';
import { useGetRestaurants } from '../../../API/useGetRestaurants';
import './styles.css';

const Location = () => {
  //const navigate = useNavigate();
  const [location, setLocation] = useState<string | undefined>('');
  const [error, setError] = useState<string | undefined>('');
  const {mutateAsync: getRestaurants} = useGetRestaurants();

  const handleSubmit = async (address: string | undefined) => {
    try {
      setError('');
      if (!address) {
        setError('Please Enter an Address.');
      }
      //run post request to backend for address search
      /*
      PSUEDO CODE!!!!!!
      const response = await googleMapsFunction(address);
      if (response) setRestaurants(response);
      */
      //navigate to wheel page
      setError('');
      // navigate('/wheel');
      const restaurants = await getRestaurants({term: 'tacos', location: 'ridgewood, ny'});
      console.log(restaurants)
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
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className='LocationButton'
          onClick={() => handleSubmit(location)}
        >
          Submit
        </button>
      </div>
      {error && <span className='LocationError'>{error}</span>}
    </>
  );
};

export default Location;
