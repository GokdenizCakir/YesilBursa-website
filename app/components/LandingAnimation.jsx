'use client';

import React from 'react';
import { DM_Serif_Display } from 'next/font/google';

import Carousel from './Carousel';
import Features from './Features';

const font = DM_Serif_Display({ subsets: ['latin'], weight: '400' });

const LandingAnimation = () => {
  return (
    <>
      <div
        style={{ backgroundImage: 'url(/landing_bg.webp)' }}
        className='h-screen relative filter bg-cover bg-center bg-no-repeat'
        id='about'
      >
        <div className='w-full h-full flex text-white text-4xl text-center md:text-6xl justify-center items-center absoulte bg-customNavy/60'>
          <h1 className={font.className}>
            Türkiye'nin en iyi demir çelik distribütörü
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingAnimation;
