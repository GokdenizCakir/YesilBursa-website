'use client';

import React from 'react';
import slides from '../data/carousel.json';

const Carousel = ({ data }) => {
  const [filter, setFilter] = React.useState('all');
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevCurrentSlide) => {
      if (prevCurrentSlide === slides.length - 1) {
        return 0;
      } else {
        return prevCurrentSlide + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevCurrentSlide) => {
      if (prevCurrentSlide === 0) {
        return slides.length - 1;
      } else {
        return prevCurrentSlide - 1;
      }
    });
  };

  //   React.useEffect(() => {
  //     setInterval(() => {
  //       nextSlide();
  //     }, 7000);
  //   }, []);

  return (
    <div
      className='flex justify-center items-center relative h-screen overflow-hidden'
      id='products'
    >
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-customNavy'>
        <div className='flex select-none justify-center items-center gap-4 h-20'>
          <div
            onClick={() => setFilter('all')}
            className={`${
              filter == 'all' ? 'text-white bg-customNavy' : null
            } rounded-2xl text-center py-1 px-2 cursor-pointer ring-1 ring-customNavy`}
          >
            Hepsi
          </div>
          <div
            onClick={() => setFilter('products')}
            className={`${
              filter == 'products' ? 'text-white bg-customNavy' : null
            } rounded-2xl text-center py-1 px-2 cursor-pointer ring-1 ring-customNavy`}
          >
            Ürünler
          </div>
          <div
            onClick={() => setFilter('özellikler')}
            className={`${
              filter == 'özellikler' ? 'text-white bg-customNavy' : null
            } rounded-2xl text-center py-1 px-2 cursor-pointer ring-1 ring-customNavy`}
          >
            Özellikler
          </div>
        </div>
      </div>
      <div
        className='flex justify-center items-center absolute left-4 top-0 h-full w-10 z-10 cursor-pointer'
        onClick={prevSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          className='w-8 h-8 fill-white hover:fill-gray-300 hover:w-10 hover:h-10 transition-all duration-500 ease-in-out'
        >
          <path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
        </svg>
      </div>

      {slides.map((slide, index) => {
        return (
          <div
            className={`${currentSlide == index ? 'w-full h-full' : ''}`}
            key={index}
          >
            <img
              src={slide.image}
              className={`absolute w-full h-full object-cover left-0 top-0 select-none transition-all duration-500 -z-10 ${
                currentSlide == index
                  ? 'blur-md opacity-100'
                  : 'blur-sm opacity-0'
              }`}
            />
            <div
              className={`absolute top-1/2 -translate-y-1/2 px-14 md:px-20 py-8 select-none ${
                currentSlide == index
                  ? 'opacity-100 transition-opacity duration-500 ease-in-out'
                  : 'opacity-0'
              }`}
            >
              <h1 className='inline-block text-customNavy text-3xl md:text-4xl font-bold mb-2 border-b-4 border-customNavy'>
                {slide.category}{' '}
                <span className='text-white'>{slide.model}</span>
              </h1>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-1'>
                  <h1 className='text-gray-200 text-xl md:text-2xl font-semibold'>
                    Özellikler
                  </h1>
                  <p className='text-white text-base md:text-lg font-medium'>
                    {slide.features}
                  </p>
                </div>
                <div className='flex-1'>
                  <h1 className='text-gray-200 text-xl md:text-2xl font-semibold'>
                    Kullanım Alanları
                  </h1>
                  <p className='text-white text-base md:text-lg font-medium'>
                    {slide.areas}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className='flex justify-center items-center absolute right-4 top-0 h-full w-10 z-10 cursor-pointer'
        onClick={nextSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          className='w-8 h-8 fill-white hover:fill-gray-300 hover:w-10 hover:h-10 transition-all duration-500 ease-in-out'
        >
          <path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
        </svg>
      </div>
      <div className='absolute bottom-4'>
        <div className='flex justify-center items-center'>
          {slides.map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-400'
                } mx-1 cursor-pointer transition-all duration-500 ease-in-out`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
