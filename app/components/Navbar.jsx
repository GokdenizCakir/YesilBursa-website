'use client';

import { Didact_Gothic } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const font = Didact_Gothic({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setMenuOpened(false));
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  const scrollToDiv = (id) => {
    let navHeight = 80;
    if (window.innerWidth >= 1024) {
      navHeight = 96;
    }

    window.scrollTo({
      top: document.querySelector(id).offsetTop - navHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`${
        scrolled ? 'bg-customWhite text-customPrimary' : 'text-customWhite ' && menuOpened ? 'bg-customWhite text-customPrimary' : 'text-customWhite'
      } fixed w-screen z-[1000] transition-all duration-500 pl-0 lg:pl-20 lg:py-2 px-4 lg:px-20  select-none  border-b-[1px] border-white/30`}
    >
      <div className='flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center md:text-xl lg:text-3xl gap-6 p-2 md:p-0'
        >
          <img src='/ysll.webp' className='h-14 md:h-20' alt='ysll' />
          <h2 className={font.className + " tracking-wider text-base  md:text-2xl leading-none"}>YEŞİLBURSA <br className='md:hidden block' /> PASLANMAZ</h2>
        </Link>
        <ul className='sm:flex justify-between hidden gap-4'>
          {/* <li className='cursor-pointer' onClick={() => scrollToDiv('#about')}> */}
          <Link href='/catalog' className='cursor-pointer'>
            Hakkımızda
            </Link>
          {/* </li> */}
          <Link href='/catalog' className='cursor-pointer'>
            Katalog
          </Link>
          <li className='cursor-pointer'>Üretim</li>
          <li
            className='cursor-pointer'
            onClick={() => scrollToDiv('#contact')}
          >
            İletişim
          </li>
        </ul>
        <svg
          onClick={() => setMenuOpened(!menuOpened)}
          className={`overflow-visible sm:hidden mr-2 ${(menuOpened || scrolled) ? 'stroke-customPrimary' : 'stroke-customWhite'}`}
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
            // stroke='#EADAFF'
            strokeWidth='2'
          />
          <line
            className={`${
              menuOpened ? 'opacity-0' : null
            } duration-300 transition-all`}
            y1='8'
            x2='28'
            y2='8'
            // stroke='#EADAFF'
            strokeWidth='2'
          />
          <line
            className={`${
              menuOpened ? '-rotate-45 translate-y-[0.3rem]' : null
            } origin-left duration-500 transition-all`}
            y1='15'
            x2='28'
            y2='15'
            // stroke='#EADAFF'
            strokeWidth='2'
          />
        </svg>
      </div>
      <ul
        className={`${
          menuOpened ? 'h-60' : 'opacity-0 h-0'
        } flex flex-col gap-4 transition-all overflow-hidden sm:hidden items-center bg-customWhite/100 text-customPrimary absolute w-full top-32 left-0 text-md`}
      >
        <li className='cursor-pointer' onClick={() => scrollToDiv('#about')}>
          Hakkımızda
        </li>
        <li className='cursor-pointer' onClick={() => scrollToDiv('#products')}>
          Ürünler
        </li>
        <li className='cursor-pointer'>Üretim</li>
        <li className='cursor-pointer' onClick={() => scrollToDiv('#features')}>
          Özellikler
        </li>
        <li className='cursor-pointer' onClick={() => scrollToDiv('#contact')}>
          İletişim
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
