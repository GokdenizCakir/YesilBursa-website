'use client';
import { Carousel } from 'flowbite-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
// import Carousel from '../components/Carousel';

const page = () => {
	const [filter, setFilter] = React.useState('ostenitik');
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab');

	React.useEffect(() => {
		if (tab) {
			setFilter(tab);
		}
	}, [tab]);

	return (
		<div className='px-0 flex justify-center  bg-cover bg-center bg-no-repeat bg-[url(/landing_bg.webp)]'>
			{/* <Carousel /> */}
			<div className='w-full md:min-w-fit flex flex-col gap-8 md:gap-16 items-center py-8 bg-customNavy/70 backdrop-blur-sm '>
				<div className='flex flex-row items-center justify-start md:justify-center px-12 w-11/12  overflow-x-scroll overflow-y-visible pt-24 *:h-16 md:*:h-auto md:gap-0 gap-1 '>
					{/* <button
							className={`${
								filter !== 'all'
									? 'bg-customWhite opacity-60 text-customPrimary/80'
									: 'bg-customWhite text-customPrimary/100'
							} text-customPrimary/60 font-bold py-2 px-4 rounded-l cursor-pointer`}
							onClick={() => setFilter('all')}
						>
							Tümü
						</button> */}
					<button
						className={`${
							filter !== 'ostenitik'
								? 'bg-customWhite opacity-60 text-customPrimary/80'
								: 'bg-customWhite text-customPrimary/100'
						}  font-bold py-2 px-4 rounded-l cursor-pointer`}
						onClick={() => setFilter('ostenitik')}
					>
						Östenitik
					</button>
					<button
						className={`${
							filter !== 'ferritik'
								? 'bg-customWhite opacity-60 text-customPrimary/80'
								: 'bg-customWhite text-customPrimary/100'
						}  font-bold py-2 px-4  cursor-pointer`}
						onClick={() => setFilter('ferritik')}
					>
						Ferritik
					</button>
					<button
						className={`${
							filter !== 'angle-bar'
								? 'bg-customWhite opacity-60 text-customPrimary/80'
								: 'bg-customWhite text-customPrimary/100'
						}  font-bold py-2 px-4  cursor-pointer`}
						onClick={() => setFilter('angle-bar')}
					>
						Angle Bar
					</button>
					<button
						className={`${
							filter !== 'paslanmaz-lama'
								? 'bg-customWhite opacity-60 text-customPrimary/80'
								: 'bg-customWhite text-customPrimary/100'
						}  font-bold py-2 px-4  cursor-pointer`}
						onClick={() => setFilter('paslanmaz-lama')}
					>
						Paslanmaz Lama
					</button>
					<button
						className={`${
							filter !== 'round-bar'
								? 'bg-customWhite opacity-60 text-customPrimary/80'
								: 'bg-customWhite text-customPrimary/100'
						}  font-bold py-2 px-4  cursor-pointer`}
						onClick={() => setFilter('round-bar')}
					>
						Round Bar
					</button>
					<button
						className={`${
							filter !== 'hakkimizda'
								? 'bg-customWhite opacity-60 text-customPrimary/80'
								: 'bg-customWhite text-customPrimary/100'
						} text-customPrimary/60 font-bold rounded-r py-2 px-4 cursor-pointer`}
						onClick={() => setFilter('hakkimizda')}
					>
						Hakkımızda
					</button>
				</div>
				{/* <div className='w-full h-full'></div> */}
				{/* 
				{filter === 'all' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
					<Hakkimizda />
					{Ostenitik.map((item, i) => {
						return React.cloneElement(item, { key: 'f' + i });
					})}
					</Carousel>
				)} */}
				{filter === 'hakkimizda' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
						{<Hakkimizda />}
					</Carousel>
				)}
				{filter === 'ostenitik' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
						{Ostenitik.map((item, i) => {
							return React.cloneElement(item, { key: 'o' + i });
						})}
					</Carousel>
				)}
				{filter === 'ferritik' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
						{Ferritik.map((item, i) => {
							return React.cloneElement(item, { key: 'f' + i });
						})}
					</Carousel>
				)}
				{filter === 'angle-bar' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
						{AngleBar.map((item, i) => {
							return React.cloneElement(item, { key: 'f' + i });
						})}
					</Carousel>
				)}
				{filter === 'round-bar' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
						{RoundBar.map((item, i) => {
							return React.cloneElement(item, { key: 'f' + i });
						})}
					</Carousel>
				)}
				{filter === 'paslanmaz-lama' && (
					<Carousel slide={false} className='h-screen pb-16' indicators={false}>
						{PaslanmazLama.map((item, i) => {
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

const Ostenitik = [
	<img
		src='/katalog/o-ana@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/Östenitik@2x.png'
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
];

const Ferritik = [
	<img
		src='/katalog/f-ana@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
	<img
		src='/katalog/tablo-1.png'
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
];

const AngleBar = [
	<img
		src='/katalog/Angle Bar@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
];

const RoundBar = [
	<img
		src='/katalog/Round Bar@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
];

const PaslanmazLama = [
	<img
		src='/katalog/Paslanmaz Lama@2x.png'
		alt='...'
		className='w-full h-full select-none object-contain'
	/>,
];

export default page;
