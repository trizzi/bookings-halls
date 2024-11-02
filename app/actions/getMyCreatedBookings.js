'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import checkAuth from './checkAuth';

async function getMyCreatedBookings() {
	const sessionCookie = await cookies().get('appwrite-session');
	if (!sessionCookie) {
		redirect('/login');
	}
	try {
		const { databases } = await createSessionClient(sessionCookie.value);

		// Get UserID
		const { user } = await checkAuth();
		if (!user) {
			return {
				error: 'You must be logged in to view bookins',
			};
		}

		// Fetch room
		const { documents: bookings } = await databases.listDocuments(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
			process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
			[Query.equal('user_id', user.id)],
		);

		return bookings;
	} catch (error) {
		console.log("Failed to get user's bookings", error.response || error);
		return {
			error: "Failed to get user's bookings",
		};
	}
}

export default getMyCreatedBookings;
