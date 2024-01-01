'use client';

import React from 'react';
import { Didact_Gothic } from 'next/font/google';

import Carousel from './Carousel';
import Features from './Features';
import Link from 'next/link';

const font = Didact_Gothic({ subsets: ['latin'], weight: '400' });

const LandingAnimation = () => {
  return (
    <>
      <div
        style={{ backgroundImage: 'url(/landing_bg.webp)' }}
        className='h-screen relative filter bg-cover bg-center bg-no-repeat'
        id='about'
      >
        <div className='w-full h-full flex flex-col text-white text-4xl text-center md:text-6xl justify-center gap-4 md:gap-12 items-center absoulte bg-customNavy/60'>
          <h1 className={font.className}>
            Türkiye'nin en iyi demir çelik distribütörü
          </h1>
          <div className="flex gap-4">
          <Link href={"/catalog"} className='font-light text-sm md:text-xl ring-1 md:ring-2 rounded-full ring-white md:py-2 md:px-4 py-2 px-2'>Ürün Kataloğumuz</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingAnimation;
