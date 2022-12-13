import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import './styles.css'

interface CloseButtonProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CloseButton = (props: CloseButtonProps) => {
  const { setModalOpen } = props;

  return (
    <div className='CloseButton' onClick={() => setModalOpen(false)}>
      <IconContext.Provider value={{ color: '#f706cf', size: '2rem' }}>
        <GiKnifeFork />
      </IconContext.Provider>
    </div>
  );
};

export default CloseButton;
