const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='py-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<p className='text-center text-sm text-gray-900 dark:text-white'>
					&copy; {currentYear} BookMe. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
