'use client';
import { Carousel } from 'flowbite-react';
import React from 'react';
// import Carousel from '../components/Carousel';

const page = () => {
	const [filter, setFilter] = React.useState('all');

	return (
		<div className='pt-24 px-0 flex justify-center bg-customNavy'>
			{/* <Carousel /> */}
			<div className=' w-full md:min-w-fit flex flex-col gap-8 items-center py-8'>
				<div className='flex flex-col items-center justify-center w-full'>
					<div className='flex flex-row items-center justify-center w-full'>
						<button
							className={`${
								filter === 'all' ? 'bg-customGray' : 'bg-customNavy'
							} text-white font-bold py-2 px-4 rounded-l cursor-pointer`}
							onClick={() => setFilter('all')}
						>
							Tümü
						</button>
						<button
							className={`${
								filter === 'hakkimizda' ? 'bg-customGray' : 'bg-customNavy'
							} text-white font-bold py-2 px-4 cursor-pointer`}
							onClick={() => setFilter('hakkimizda')}
						>
							Hakkımızda
						</button>
						<button
							className={`${
								filter === 'urunler' ? 'bg-customGray' : 'bg-customNavy'
							} text-white font-bold py-2 px-4 rounded-r cursor-pointer`}
							onClick={() => setFilter('urunler')}
						>
							Ürünler
						</button>
					</div>
					<div className='w-full h-full'></div>
				</div>

				{filter === 'all' && (
					<Carousel slide={false} className='h-screen'>
						<Hakkimizda />
						{Urunler.map((item, i) => {
							return React.cloneElement(item, { key: 'f' + i });
						})}
					</Carousel>
				)}
				{filter === 'hakkimizda' && (
					<Carousel slide={false} className='h-screen'>
						{<Hakkimizda />}
					</Carousel>
				)}
				{filter === 'urunler' && (
					<Carousel slide={false} className='h-screen'>
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
		src='/katalog/1.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/2.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/3.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/4.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/5.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/6.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/tablo-1.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
];
export default page;
