import React from 'react';
import {gif} from '../../assets';

const Loader = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center'>
      <img className='max-w-full max-h-full' src={gif} alt="loading plant" />
    </div>
  );
};

export default Loader;
