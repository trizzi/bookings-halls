import Heading from '@/components/Heading';
import RoomCard from '@/components/RoomCard';
import getAllRooms from './actions/getAllRooms';
// import rooms from '@/data/rooms.json';

export default async function Home() {
	const rooms = await getAllRooms();
	return (
		<>
			<Heading title='Available Rooms' />
			{rooms.length > 0 ? (
				rooms.map((room) => (
					<RoomCard
						room={room}
						key={room.$id}
					/>
				))
			) : (
				<p>No rooms available at the moment</p>
			)}
		</>
	);
}
