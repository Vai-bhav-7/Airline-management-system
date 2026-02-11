// const BookingCard = ({ data }) => {
//   console.log("Data", data);
//   const departureTime = new Date(
//     data.bookinFlightId[0]?.departureTime
//   ).toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   const arrivalTime = new Date(
//     data.bookinFlightId[0]?.arrivalTime
//   ).toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   // console.log("efjnejfd",departureTime , arrivalTime);
//   return (
//     <div className="w-11/12 mx-auto py-10">
//       <div className="w-10/12 mx-auto border rounded-2xl  flex">
//         <div className="w-8/12 border-r rounded-2xl border-dashed border-black  bg-slate-300 flex flex-col gap-5 items-center justify-between">
//           <div className="w-full px-5  h-16 rounded-t-2xl bg-[rgb(116,151,205)] flex justify-evenly items-center ">
//             <p className="font-extrabold text-xl">Boarding Paass</p>
//             <img
//               className="w-40 h-12"
//               alt="..."
//               src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1713451845/UploadOnly/on-white-background-plane-vector-logo-2RYCFG8_htozq6.png"
//             ></img>
//           </div>

//           {/* Name */}
//           <div className="w-11/12 mx-auto flex items-center ">
//             <div className="w-8/12 flex flex-col gap-3">
//               <div>
//                 Name:{" "}
//                 <span className="font-bold">{`${data.cusFirstName} ${data.cusLastName}`}</span>{" "}
//               </div>

//               <div className="flex justify-between ">
//                 <div className="w-1/2">
//                   From:{" "}
//                   <span className="font-bold">{`${data.bookinFlightId[0]?.flightFrom}`}</span>{" "}
//                 </div>
//                 <div className="w-1/2">
//                   Gender: <span className="font-bold"> {data.gender}</span>
//                 </div>
//               </div>
//               <div className="flex justify-between ">
//                 <div className="w-1/2">
//                   To:{" "}
//                   <span className="font-bold">{`${data.bookinFlightId[0]?.flightTo}`}</span>
//                 </div>
//                 <div className="w-1/2">
//                   Fare:{" "}
//                   <span className="font-bold">{`${
//                     data.bookinFlightId[0]?.fare / 100
//                   }`}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="w-4/12">
//               <img
//                 alt="..."
//                 className="w-[80px] h-[80px]"
//                 src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
//               ></img>
//             </div>
//           </div>

//           {/* Time */}
//           <div className="w-11/12 mx-auto flex justify-between">
//             <div className="w-1/3">
//               Departure: <span className="font-bold">{departureTime}</span>
//             </div>
//             <div className="w-1/3">
//               Arrival: <span className="font-bold">{arrivalTime}</span>
//             </div>
//             <div className="w-1/3">
//               Seat: <span className="font-bold">1</span>{" "}
//             </div>
//           </div>
//           <div className="w-full h-8 rounded-b-2xl bg-[rgb(116,151,205)]  flex items-center justify-center"></div>
//         </div>
//         <div className="w-4/12 flex flex-col gap-5  bg-slate-300">
//           <div className="w-full h-16 rounded-t-2xl bg-[rgb(116,151,205)]  flex items-center justify-center">
//             <p className="font-extrabold text-xl">Boarding Paass</p>
//           </div>
//           <div className="w-11/12 mx-auto">
//             <p>
//               Name:{" "}
//               <span className="font-bold">{`${data.cusFirstName} ${data.cusLastName}`}</span>{" "}
//             </p>
//             <p>
//               From:{" "}
//               <span className="font-bold">{`${data.bookinFlightId[0]?.flightFrom}`}</span>
//             </p>
//             <p>
//               To:{" "}
//               <span className="font-bold">{`${data.bookinFlightId[0]?.flightTo}`}</span>
//             </p>
//           </div>
//           <div>
//             <div className="flex justify-between w-11/12 mx-auto">
//               <p className="W-1/2">
//                 Gender: <span className="font-bold"> {data.gender}</span>
//               </p>
//               <p className="w-1/2">
//                 Fare:{" "}
//                 <span className="font-bold">{`${
//                   data.bookinFlightId[0]?.fare / 100
//                 }`}</span>
//               </p>
//             </div>
//             <div className="w-11/12 mx-auto flex justify-between">
//               <div className="w-1/3">
//                 Departure: <span className="font-bold">{departureTime}</span>
//               </div>
//               <div className="w-1/3">
//                 Arrival: <span className="font-bold">{arrivalTime}</span>
//               </div>
//               <div className="w-1/3">
//                 Seat: <span className="font-bold">1</span>{" "}
//               </div>
//             </div>
//           </div>
//           <div className="w-full h-8 rounded-b-2xl bg-[rgb(116,151,205)]  flex items-center justify-center"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookingCard;


const BookingCard = ({ data }) => {
  if (!data || !data.bookinFlightId?.length) return null;

  const flight = data.bookinFlightId[0];

  const departureTime = new Date(flight.departureTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const arrivalTime = new Date(flight.arrivalTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[700px] bg-white rounded-2xl shadow-xl overflow-hidden flex">
        {/* LEFT SIDE */}
        <div className="w-2/3 p-6 bg-slate-100 border-r border-dashed">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">✈ Boarding Pass</h2>
          <p className="text-lg font-semibold">Passenger: {data.cusFirstName} {data.cusLastName}</p>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-gray-500 text-sm">From</p>
              <p className="font-bold text-lg">{flight.flightFrom}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">To</p>
              <p className="font-bold text-lg">{flight.flightTo}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-gray-500 text-sm">Departure</p>
              <p className="font-bold">{departureTime}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Arrival</p>
              <p className="font-bold">{arrivalTime}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <p>Seat: <b>{data.seat}</b></p>
            <p>Fare: <b>₹{flight.fare}</b></p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/3 bg-blue-600 text-white flex flex-col items-center justify-center">
          <p className="text-xl font-bold">APPS Airline</p>
          <p className="mt-2">Boarding Pass</p>
          <img
            className="w-24 mt-4"
            alt="qr"
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;