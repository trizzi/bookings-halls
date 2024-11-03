import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
// import rooms from '@/data/rooms.json';
import Heading from '@/components/Heading';
import BookingForm from '@/components/BookingForm';
import getSingleRoom from '@/app/actions/getSingleRoom';

const RoomPage = async ({ params }) => {
	const { id } = params;
	const room = await getSingleRoom(id);

	const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
	const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

	const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

	const imageSrc = room.image ? imageUrl : '/images/no-image.jpg';

	if (!room) {
		return <Heading title='No Room Found' />;
	}

	return (
		<>
			<Heading title={room.name} />
			<div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow rounded-lg p-6'>
				<Link
					href='/'
					className='flex items-center text-gray-600 dark:text-white hover:text-gray-800 mb-4'>
					<FaChevronLeft className='inline mr-1' />
					<span className='ml-2'>Back to Rooms</span>
				</Link>

				<div className='flex flex-col sm:flex-row sm:space-x-6'>
					<Image
						src={imageSrc}
						width={400}
						height={100}
						alt={room.name}
						className='w-full sm:w-1/3 h-64 object-cover rounded-lg'
					/>

					<div className='mt-4 sm:mt-0 sm:flex-1'>
						<p className='text-gray-600 dark:text-white mb-4'>
							{room.description}
						</p>

						<ul className='space-y-2'>
							<li>
								<span className='font-semibold text-gray-800 dark:text-white'>
									Size:
								</span>{' '}
								{room.sqft}
								{''}
								sq ft
							</li>
							<li>
								<span className='font-semibold text-gray-800 dark:text-white'>
									Availability:
								</span>
								{room.availability}
							</li>
							<li>
								<span className='font-semibold text-gray-800 dark:text-white'>
									Price:
								</span>
								${room.price_per_hour}/hour
							</li>
							<li>
								<span className='font-semibold text-gray-800 dark:text-white'>
									Address:
								</span>{' '}
								{room.address}
							</li>
						</ul>
					</div>
				</div>

				<BookingForm room={room} />
			</div>
		</>
	);
};

export default RoomPage;
