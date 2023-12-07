'use client';
import React from 'react';
import Carousel from '../components/Carousel';

const page = () => {
  const [filter, setFilter] = React.useState('all');

  return (
    <div className='pt-24'>
      
      <Carousel />
    </div>
  );
};

export default page;
