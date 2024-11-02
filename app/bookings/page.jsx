import React from 'react';
import Heading from '@/components/Heading';
import getMyCreatedBookings from '../actions/getMyCreatedBookings';
import BookedRoomCard from '@/components/BookedRoomCard';

const BookingsPage = async () => {
	const bookings = await getMyCreatedBookings();

	return (
		<>
			<Heading title='My Bookings' />
			{bookings === 0 ? (
				<p className='mt-4 text-gray-600'>You have no bookings</p>
			) : (
				bookings.map((booking) => (
					<BookedRoomCard
						key={booking.$id}
						booking={booking}
					/>
				))
			)}
		</>
	);
};

export default BookingsPage;
