import Heading from '@/components/Heading';
import MyRoomCard from '@/components/MyRoomCard';
import getMyCreatedRooms from '@/app/actions/getMyCreatedRooms';

const MyRoomsPage = async () => {
	const rooms = await getMyCreatedRooms();

	return (
		<>
			<Heading title='My Rooms' />
			{rooms.length > 0 ? (
				rooms.map((room) => (
					<MyRoomCard
						key={room.$id}
						room={room}
					/>
				))
			) : (
				<p>You have no room listings</p>
			)}
		</>
	);
};

export default MyRoomsPage;
