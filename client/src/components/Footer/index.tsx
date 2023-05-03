import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <p>
        ©ROULEAT was designed and developed by{' '}
        <a
          href='https://www.github.com/will-watson'
          target='_blank'
          rel='noreferrer'
        >
          William Watson
        </a>{' '}
        and{' '}
        <a href='https://www.github.com/JC00K' target='_blank' rel='noreferrer'>
          Jeremy Cook.
        </a>
      </p>
    </div>
  );
};

export default Footer;
