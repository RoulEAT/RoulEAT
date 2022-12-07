import React from 'react';
import './styles.css';
import Restaurant from './Restaurant/index';

const Modal = () => {
  return (
    <div className='ModalContainer'>
      <div className='Modal'>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </div>
  );
};

export default Modal;
