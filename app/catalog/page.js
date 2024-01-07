'use client';
import { Carousel } from 'flowbite-react';
import React from 'react';
// import Carousel from '../components/Carousel';

const page = () => {
	const [filter, setFilter] = React.useState('urunler');

	return (
		<div className='px-0 flex justify-center  bg-cover bg-center bg-no-repeat bg-[url(/landing_bg.webp)]'>
			{/* <Carousel /> */}
			<div className='w-full md:min-w-fit flex flex-col gap-8 md:gap-16 items-center py-8 bg-customNavy/70 backdrop-blur-sm '>
				<div className='flex flex-col items-center justify-center w-full pt-24'>
					<div className='flex flex-row items-center justify-center w-full'>
						<button
							className={`${
								filter !== 'all'
									? 'bg-customWhite opacity-60 text-customPrimary/80'
									: 'bg-customWhite text-customPrimary/100'
							} text-customPrimary/60 font-bold py-2 px-4 rounded-l cursor-pointer`}
							onClick={() => setFilter('all')}
						>
							Tümü
						</button>
						<button
							className={`${
								filter !== 'hakkimizda'
									? 'bg-customWhite opacity-60 text-customPrimary/80'
									: 'bg-customWhite text-customPrimary/100'
							} text-customPrimary/60 font-bold py-2 px-4 cursor-pointer`}
							onClick={() => setFilter('hakkimizda')}
						>
							Hakkımızda
						</button>
						<button
							className={`${
								filter !== 'urunler'
									? 'bg-customWhite opacity-60 text-customPrimary/80'
									: 'bg-customWhite text-customPrimary/100'
							}  font-bold py-2 px-4 rounded-r cursor-pointer`}
							onClick={() => setFilter('urunler')}
						>
							Ürünler
						</button>
					</div>
					<div className='w-full h-full'></div>
				</div>

				{filter === 'all' && (
					<Carousel slide={false} className='h-screen pb-16'>
						<Hakkimizda />
						{Urunler.map((item, i) => {
							return React.cloneElement(item, { key: 'f' + i });
						})}
					</Carousel>
				)}
				{filter === 'hakkimizda' && (
					<Carousel slide={false} className='h-screen pb-16'>
						{<Hakkimizda />}
					</Carousel>
				)}
				{filter === 'urunler' && (
					<Carousel slide={false} className='h-screen pb-16'>
						{Urunler.map((item, i) => {
							return React.cloneElement(item, { key: 'f' + i });
						})}
					</Carousel>
				)}
			</div>
		</div>
	);
};

const Hakkimizda = () => (
	<img
		src='/katalog/Anasayfa.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>
);

const Urunler = [
	<img
		src='/katalog/o-ana@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-1@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-2@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-3@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-4@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-5@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-6@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-7@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-8@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-9@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-10@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/o-11@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/f-ana@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/f-1@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/f-2@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/f-3@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/f-4@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/f-5@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/tablo-1.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/Östenitik@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/Paslanmaz Lama@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/Round Bar@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/Angle Bar@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
];
export default page;
