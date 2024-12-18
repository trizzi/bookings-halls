import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import AuthWrapper from '@/components/AuthWrapper';
import '@/assets/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'BookMe App | Book a room',
	description: 'Book a room or conference hall',
};

export default function RootLayout({ children }) {
	return (
		<AuthWrapper>
			<html lang='en'>
				<body className={inter.className}>
					<Header />
					<main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
						{children}
					</main>
					<Footer />
					<ToastContainer />
				</body>
			</html>
		</AuthWrapper>
	);
}
