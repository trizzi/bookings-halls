'use client';

import { useEffect, useState } from 'react';

const ThemeToggler = () => {
	const [theme, setTheme] = useState('light');

	// On mount, set theme based on localStorage or system preference
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;

		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle('dark', savedTheme === 'dark');
		} else if (systemPrefersDark) {
			setTheme('dark');
			document.documentElement.classList.add('dark');
		}
	}, []);

	// Toggle the theme and update localStorage
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
	};

	return (
		<button
			onClick={toggleTheme}
			className='p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md'>
			Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
		</button>
	);
};

export default ThemeToggler;
