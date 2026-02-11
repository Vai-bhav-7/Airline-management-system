import React from "react";
import Footer from "../Components/Common/Footer";

const AboutUs = () => {
  return (
    <div className="w-[100vw] min-w-[450px] relative text-white pt-14 bg-gradient-to-br from-cyan-400 to-black overflow-hidden">

      <div className="w-11/12 mx-auto mt-10 mb-20">
        <h1 className="text-4xl font-bold text-center mb-10 font-serif text-black">
          About Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 text-black">
          <p className="mb-6 text-lg leading-7">
            Welcome to our Airline Management System. This platform is designed
            to simplify and streamline airline operations including flight
            management, booking, and payment processing.
          </p>

          <p className="mb-6 text-lg leading-7">
            Our system provides an efficient and user-friendly experience for
            passengers while ensuring smooth backend operations for airline
            administrators.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Flight Booking & Management</li>
              <li>Secure Online Payment Integration</li>
              <li>User Dashboard</li>
              <li>Admin Control Panel</li>
              <li>Built using MERN Stack</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
