import React from 'react';
import Link from 'next/link';

const BookedRoomCard = ({ booking }) => {
	const { room_id: room } = booking;

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		// Get Month
		const options = { month: 'short' };
		const month = date.toLocaleString('en-US', options, { timeZone: 'UTC' });

		// Get DAy
		const day = date.getUTCDate();
		// format to 12-hour UTC
		const timeOption = {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
			timeZone: 'UTC',
		};

		const time = date.toLocaleString('en-US', timeOption);

		// final format
		return `${day} ${month} at ${time}`;
	};
	return (
		<div className='bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
			<div>
				<h4 className='text-lg font-semibold'>{room.name}</h4>
				<p className='text-sm text-gray-600'>
					<strong>Check In:</strong> {formatDate(booking.check_in)}
				</p>
				<p className='text-sm text-gray-600'>
					<strong>Check Out:</strong> {formatDate(booking.check_out)}
				</p>
			</div>
			<div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
				<Link
					href={`/rooms/${room.$id}`}
					className='bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700'>
					View Room
				</Link>
				<button
					href='#'
					className='bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700'>
					Cancel Booking
				</button>
			</div>
		</div>
	);
};

export default BookedRoomCard;
