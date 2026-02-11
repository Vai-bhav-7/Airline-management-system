import { useSelector } from "react-redux";
import BookingCard from "../Components/Core/UserDashboard/BookingCard";

const MyBooking = () => {
  const allBookings = useSelector((state) => state.flight.allbookingDetails);

  if (!allBookings || allBookings.length === 0)
    return <div>No bookings found</div>;

  return (
    <div>
      {allBookings.map((booking, index) => (
        <BookingCard key={index} data={booking} />
      ))}
    </div>
  );
};

export default MyBooking;
