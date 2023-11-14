'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setMenuOpened(false));
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  return (
    <nav
      className={`${
        scrolled ? 'bg-customNavy' : ''
      }  fixed w-screen z-[1000] transition-all duration-500 pl-0 lg:pl-20 lg:py-2 px-4 lg:px-20 text-white`}
    >
      <div className='flex items-center justify-between'>
        <img src='/ysll.webp' className='h-20' alt='ysll' />
        <div className='sm:flex justify-between hidden gap-4'>
          <Link href='#'>Hakkımızda</Link>
          <Link href='#'>Ürünler</Link>
          <Link href='#'>Üretim</Link>
          <Link href='#'>Özellikler</Link>
          <Link href='#'>İletişim</Link>
        </div>
        <svg
          onClick={() => setMenuOpened(!menuOpened)}
          className='overflow-visible sm:hidden'
          width='28'
          height='16'
          viewBox='0 0 28 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            className={`${
              menuOpened ? 'rotate-45 -translate-y-[0.3rem]' : null
            } origin-left duration-500 transition-all`}
            y1='1'
            x2='28'
            y2='1'
            stroke='#EADAFF'
            strokeWidth='2'
          />
          <line
            className={`${
              menuOpened ? 'opacity-0' : null
            } duration-300 transition-all`}
            y1='8'
            x2='28'
            y2='8'
            stroke='#EADAFF'
            strokeWidth='2'
          />
          <line
            className={`${
              menuOpened ? '-rotate-45 translate-y-[0.3rem]' : null
            } origin-left duration-500 transition-all`}
            y1='15'
            x2='28'
            y2='15'
            stroke='#EADAFF'
            strokeWidth='2'
          />
        </svg>
      </div>
      <div
        className={`${
          menuOpened ? 'h-40' : 'opacity-0 h-0'
        } flex flex-col gap-2 transition-all overflow-hidden sm:hidden items-center`}
      >
        <Link href='#'>Hakkımızda</Link>
        <Link href='#'>Ürünler</Link>
        <Link href='#'>Üretim</Link>
        <Link href='#'>Özellikler</Link>
        <Link href='#'>İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
