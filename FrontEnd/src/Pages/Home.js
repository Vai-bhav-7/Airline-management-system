import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowsExchange } from "react-icons/tb";
import Slider from "../Components/Common/Slider";
import Footer from "../Components/Common/Footer";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    flightFrom: "",
    flightTo: "",
    date: "",
  });

  const changeHandler = (event) => {
    setFormData((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }
    console.log("Form data being sent:", formData); 
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/flight/searchFlightData",
        {
          flightFrom: formData.flightFrom,
          flightTo: formData.flightTo,
          date: formData.date,
        }
      );
      console.log("Response from backend:", res); // pure response object
    console.log("Response data only:", res.data); // sirf data

    if (res.data && res.data.result) {
      console.log("Flights found:", res.data.result);
    } else {
      console.log("No flights in response");
    }
      setFlights(res.data.result || []); // update flight list
      console.log("Flights found:", res.data.result);
    } catch (err) {
      console.log("Error fetching flights:", err.response?.data || err.message);
      setFlights([]); // reset if error
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-black flex flex-col items-center text-black font-serif pt-20">
      {/* Booking Form */}
      <div className="w-[85%] h-[150px] my-10 rounded-lg bg-white flex flex-col items-center">
        <h4 className="text-4xl font-bold my-5">Book Your Trip</h4>
        <form
          onSubmit={submitHandler}
          className="mx-auto w-[97%] mt-1 h-[60px] flex justify-between items-center gap-3"
        >
          <input
            required
            className="h-12 rounded-md w-[300px] border-2 border-grey-900 pl-2"
            type="text"
            placeholder="From"
            name="flightFrom"
            onChange={changeHandler}
            value={formData.flightFrom}
          />
          <div className="text-2xl">
            <TbArrowsExchange />
          </div>
          <input
            required
            className="h-12 rounded-md w-[300px] border-2 border-grey-900 pl-2"
            type="text"
            placeholder="To"
            name="flightTo"
            onChange={changeHandler}
            value={formData.flightTo}
          />
          <input
            required
            className="h-12 rounded-md w-[300px] border-2 border-grey-900 pl-2"
            type="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
          />
          <button
            type="submit"
            className="bg-blue-900 font-serif py-3 px-9 text-white rounded-md"
          >
            Search Flight
          </button>
        </form>
      </div>

      {/* Flight Results */}
      <div className="w-[85%] mt-5">
        {flights.length > 0 ? (
          flights.map((f) => (
            <div
              key={f._id}
              className="bg-white p-4 mb-3 rounded-md shadow-md text-black"
            >
              <h3 className="font-bold">{f.flightName}</h3>
              <p>
                {f.flightFrom} → {f.flightTo}
              </p>
              <p>
                Departure: {new Date(f.departureTime).toLocaleString()} | Arrival:{" "}
                {new Date(f.arrivalTime).toLocaleString()}
              </p>
              <p>
                Economy: ₹{f.economicalFare} | Premium: ₹{f.premiumFare} | Business: ₹{f.businessFare}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white mt-5">No flights found for selected route and date.</p>
        )}
      </div>

      {/* Slider */}
      <div className="w-[85%] rounded-md h-[45vh] border border-grey-400 mt-10">
        <Slider />
      </div>

      {/* Offers Section */}
      <div className="mt-10 w-[85%] border-solid text-gray-200">
        <h2 className="font-bold text-3xl p-5">Offers</h2>
        <div className="w-[90%] h-[200px] flex gap-10">
          {/* Offer cards go here */}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
