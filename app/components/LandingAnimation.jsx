'use client';
import React from 'react';
import { DM_Serif_Display } from 'next/font/google';

const font = DM_Serif_Display({ subsets: ['latin'], weight: '400' });

const LandingAnimation = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/landing_bg.jpg)' }}
      className='h-[calc(100vh-5rem)] relative filter bg-cover bg-center bg-no-repeat'
    >
      <div className='w-full h-full flex text-white text-6xl justify-center items-center absoulte bg-customNavy/60'>
        <h1 className={font.className}>
          Türkiye'nin en iyi demir çelik distribütörü
        </h1>
      </div>
    </div>
  );
};

export default LandingAnimation;
