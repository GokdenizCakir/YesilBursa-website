'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-customNavy text-white relative'>
      <div className='flex flex-col gap-10 sm:gap-0 md:flex-row px-6 sm:px-10 lg:px-16 py-10'>
        <div className='text-4xl sm:mb-0 sm:text-2xl mr-6 lg:mr-12'>
          <h2 className='mb-6 font-azonix'>Yeşil Bursa </h2>
          <h2>Bir Numaralı Paslanmaz Demir Çelik</h2>
        </div>
        <div className='flex gap-12 sm:gap-4 lg:gap-10 w-full'>
          <div className='flex flex-col'>
            <h2 className='mt-2 mb-8'>Şirketimiz</h2>
            <Link
              href='/about-us'
              className='cursor-pointer text-sm mb-1 font-light'
            >
              Biz
            </Link>
            <Link href='/demo' className='cursor-pointer  text-sm font-light'>
              İletişim
            </Link>
          </div>
          <div className='flex flex-col'>
            <h2 className='mt-2 mb-8'>Sosyal</h2>
            <a className='cursor-pointer text-sm mb-1 font-light'>LinkedIn</a>
            <a className='cursor-pointer text-sm font-light'>Instagram</a>
          </div>
        </div>

        <div className='border-[0.5px] hidden md:block border-white mx-4 lg:mx-20'></div>

        <div className='w-full'>
          <img src='/ysll.webp' alt='ysll' />
          <div className='flex justify-between mb-32 sm:mb-0'>
            <div className='flex flex-col justify-end'>
              <h3 className='text-xs font-light'>C 2023 YSL</h3>
            </div>
            <div className='text-end font-light text-xs'>
              <h2>Terms & Conditions</h2>
              <h2>Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
