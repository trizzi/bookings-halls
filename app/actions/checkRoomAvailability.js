'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { DateTime } from 'luxon';

// convert a date string to a luxon datetime object in utc
const toUTCDateTime = (dateString) => {
	return DateTime.fromISO(dateString, { zone: 'utc' }).toUTC();
};

// Check for overlapping date ranges
const dateRangesOverlap = (checkInA, checkOutA, checkInB, checkOutB) => {
	return checkInA < checkOutB && checkOutA > checkInB;
};

async function checkRoomAvailability(roomId, checkIn, checkOut) {
	const sessionCookie = await cookies().get('appwrite-session');
	if (!sessionCookie) {
		redirect('/login');
	}
	try {
		const { databases } = await createSessionClient(sessionCookie.value);
		const checkInDateTime = toUTCDateTime(checkIn);
		const checkOutDateTime = toUTCDateTime(checkOut);

		// Fetch all bookings
		const { documents: bookings } = await databases.listDocuments(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
			process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
			[Query.equal('room_id', roomId)],
		);

		// Loop over bookings and check for overlaps
		for (const booking of bookings) {
			const bookingCheckInDateTime = toUTCDateTime(booking.check_in);
			const bookingCheckOutDateTime = toUTCDateTime(booking.check_out);

			if (
				dateRangesOverlap(
					checkInDateTime,
					checkOutDateTime,
					bookingCheckInDateTime,
					bookingCheckOutDateTime,
				)
			) {
				// Overlap found. Do not book
				return false;
			}
		}
		// No overlap found
		return true;
	} catch (error) {
		console.log('Failed to check room availability', error);
		return {
			error: 'Failed to check room availability',
		};
	}
}

export default checkRoomAvailability;
