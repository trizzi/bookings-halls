import ThemeToggler from '@/app/ThemeToggler';
import React from 'react';

const Heading = ({ title }) => {
	return (
		<section className=' mb-5 shadow px-4 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex justify-between dark:border-b-2'>
			<h1 className='text-2xl font-bold tracking-tight text-black dark:text-white'>
				{title}
			</h1>
			<ThemeToggler />
		</section>
	);
};

export default Heading;
