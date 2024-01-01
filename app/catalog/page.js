'use client';
import { Carousel } from 'flowbite-react';
import React from 'react';
// import Carousel from '../components/Carousel';

const page = () => {
	const [filter, setFilter] = React.useState('all');

	return (
		<div className='pt-24 flex justify-center bg-customNavy'>
			{/* <Carousel /> */}
			<div className='min-h-screen h-screen w-full md:w-1/2 flex items-center py-8'>
				<Carousel slide={false}>
					<img
						src='/katalog/Anasayfa.png'
						alt='...'
						className='w-full h-full select-none object-contain'
					/>
					<img
						src='/katalog/1.png'
						alt='...'
						className='w-full h-full select-none object-contain'
					/>
					<img
						src='/katalog/2.png'
						alt='...'
						className='w-full h-full select-none object-contain'
					/>
					<img
						src='/katalog/3.png'
						alt='...'
						className='w-full h-full select-none object-contain'
					/>
					<img
						src='/katalog/4.png'
						alt='...'
						className='w-full h-full select-none object-contain'
					/>
				</Carousel>
			</div>
		</div>
	);
};

export default page;
