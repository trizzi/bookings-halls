'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function destroySession() {
	// Retreive Cookie
	const sessionCookie = cookies().get('appwrite-session');

	if (!sessionCookie) {
		return {
			error: 'No session cookie found',
		};
	}
	try {
		const { account } = await createSessionClient(sessionCookie.value);
		//   Delete current session
		await account.deleteSession('current');

		// Clear session
		cookies().delete('appwrite-session');

		return {
			success: true,
		};
	} catch (error) {
		console.log('Authentication Error', error);
		return {
			error: 'Invalid Credentials',
		};
	}
}

export default destroySession;
