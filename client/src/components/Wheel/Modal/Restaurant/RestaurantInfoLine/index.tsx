import React, { ReactElement } from 'react';
import './styles.css';

interface RestaurantInfoLineProps {
  info: string;
  icon: ReactElement<any, any>;
}

const RestaurantInfoLine = (props: RestaurantInfoLineProps) => {
  const { info, icon } = props;
  return (
    <>
    <h3>{icon}{info}</h3>
    </>
  )
}

export default RestaurantInfoLine;
