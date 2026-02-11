const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Flight = require("./Model/Flight");

dotenv.config();

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const flights = [
  {
    flightName: "AI101",
    flightFrom: "Delhi",
    flightTo: "Mumbai",
    departureTime: "2026-01-21T09:00:00Z",
    arrivalTime: "2026-01-21T11:00:00Z",
    flightMode: "Non-Stop",
    economicalFare: 5000,
    premiumFare: 7000,
    businessFare: 10000,
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
  },
  {
    flightName: "6E202",
    flightFrom: "Mumbai",
    flightTo: "Bangalore",
    departureTime: "2026-01-22T14:00:00Z",
    arrivalTime: "2026-01-22T16:00:00Z",
    flightMode: "Connect",
    economicalFare: 4500,
    premiumFare: 6500,
    businessFare: 9000,
    days: ["Tuesday", "Thursday", "Saturday"]
  },
  {
    flightName: "AI303",
    flightFrom: "Delhi",
    flightTo: "Mumbai",
    departureTime: "2026-01-22T15:00:00Z",
    arrivalTime: "2026-01-22T17:00:00Z",
    flightMode: "Non-Stop",
    economicalFare: 5500,
    premiumFare: 7500,
    businessFare: 10500,
    days: ["Tuesday", "Thursday", "Saturday"]
  }
];

const seedFlights = async () => {
  await Flight.deleteMany(); // delete old flights
  await Flight.insertMany(flights);
  console.log("Flights seeded successfully");
  process.exit();
};

seedFlights();
