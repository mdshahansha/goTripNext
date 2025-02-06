import React from "react";
import PricingSummary from "./sidebar/PricingSummary"; // Imported Pricing Summary Component

const ReviewBooking = () => {
  // Dummy Flight Details
  const flightDetails = {
    airline: "Emirates",
    flightNumber: "EK202",
    departure: { airport: "JFK - New York", time: "10:30 AM", date: "March 15, 2025" },
    arrival: { airport: "DXB - Dubai", time: "6:00 AM", date: "March 16, 2025" },
    duration: "12h 30m",
    class: "Economy",
  };

  // Dummy Passenger Data
  const passengers = [
    { firstName: "John", lastName: "Doe", dob: "1996-05-14", passport: "M12345678" },
    { firstName: "Jane", lastName: "Doe", dob: "1998-08-22", passport: "F87654321" },
  ];

  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
          Please review your booking details carefully before proceeding to payment.
        </div>
        {/* End notification */}

        {/* Flight Details */}
        <div className="mt-40 border-bottom pb-20">
          <h3 className="text-18 fw-500">Flight Details</h3>
          <div className="row x-gap-20 y-gap-10 mt-10">
            <div className="col-md-6">
              <p className="text-16"><strong>Airline:</strong> {flightDetails.airline}</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Flight Number:</strong> {flightDetails.flightNumber}</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Departure:</strong> {flightDetails.departure.airport}</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Time:</strong> {flightDetails.departure.time} ({flightDetails.departure.date})</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Arrival:</strong> {flightDetails.arrival.airport}</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Time:</strong> {flightDetails.arrival.time} ({flightDetails.arrival.date})</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Duration:</strong> {flightDetails.duration}</p>
            </div>
            <div className="col-md-6">
              <p className="text-16"><strong>Class:</strong> {flightDetails.class}</p>
            </div>
          </div>
        </div>
        {/* End Flight Details */}

        {/* Passenger Details */}
        <div className="mt-40 border-bottom pb-20">
          <h3 className="text-18 fw-500">Passenger Details</h3>
          {passengers.map((passenger, index) => (
            <div key={index} className="row x-gap-20 y-gap-10 mt-10">
              <div className="col-md-6">
                <p className="text-16"><strong>First Name:</strong> {passenger.firstName}</p>
              </div>
              <div className="col-md-6">
                <p className="text-16"><strong>Last Name:</strong> {passenger.lastName}</p>
              </div>
              <div className="col-md-6">
                <p className="text-16"><strong>Date of Birth:</strong> {passenger.dob}</p>
              </div>
              <div className="col-md-6">
                <p className="text-16"><strong>Passport No:</strong> {passenger.passport}</p>
              </div>
              {index !== passengers.length - 1 && <hr className="my-10 w-full" />}
            </div>
          ))}
        </div>
        {/* End Passenger Details */}
      </div>
      {/* End col-xl-7 */}

      {/* Booking Sidebar */}
      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <PricingSummary />
        </div>
      </div>
      {/* End col-xl-5 */}
    </>
  );
};

export default ReviewBooking;
