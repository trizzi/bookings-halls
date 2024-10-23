'use server';

import { createAdminClient } from '@/config/appwrite';
// import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function getAllRooms() {
	try {
		const { databases } = await createAdminClient();

		// Fetch room
		const { documents: rooms } = await databases.listDocuments(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
			process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
		);

		// Revalidate cache for this path
		// revalidatePath('/', 'layout');

		return rooms;
	} catch (error) {
		console.log('Failed to get rooms', error.response || error);
		redirect('/error');
	}
}

export default getAllRooms;
