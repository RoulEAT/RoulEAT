import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import './styles.css'

interface CloseButtonProps {
  closeModal: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
  const { closeModal } = props;

  return (
    <div className='CloseButton' onClick={() => closeModal()}>
      <IconContext.Provider value={{ color: '#f706cf', size: '2rem' }}>
        <GiKnifeFork />
      </IconContext.Provider>
    </div>
  );
};

export default CloseButton;
