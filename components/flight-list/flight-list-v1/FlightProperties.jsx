"use client";


// components/FlightOffers.js
// import React from 'react';

// const FlightOffers = ({ flightOffers }) => {
 
//   // const flightsArray = Array.isArray(flightOffers) ? flightOffers : Object.values(flightOffers);
//   const flightsArray = Array.isArray(flightOffers) ? flightOffers : [];

//   console.log("flightOffers ",flightOffers);
//   return (
//     <div>
//       {flightsArray.length > 0 ? (
//         flightsArray.map((offer, index) => (
//           <div key={index} className="flight-offer">
//             <h3>Flight Offer {index + 1}</h3>
//             {offer.itineraries.map((itinerary, idx) => (
//               <div key={idx} className="itinerary">
//                 <p>Duration: {itinerary.duration}</p>
//                 {itinerary.segments.map((segment, id) => (
//                   <div key={id} className="segment">
//                     <p>
//                       {segment.departure.iataCode} to {segment.arrival.iataCode}
//                     </p>
//                     <p>Departure: {new Date(segment.departure.at).toLocaleString()}</p>
//                     <p>Arrival: {new Date(segment.arrival.at).toLocaleString()}</p>
//                     <p>Flight Number: {segment.carrierCode} {segment.number}</p>
//                     <p>Duration: {segment.duration}</p>
//                   </div>
//                 ))} 
//               </div>
//              ))}
//             <div className="price">
//               <p>
//                 Price: {offer.price.currency} {offer.price.total}
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No flight offers available...</p>
//       )}
//     </div>
//   );
// };

// export default FlightOffers;

import React from "react";
import PropTypes from "prop-types";
import data from "../../../data/flights";

const FlightProperties = ({ flightsData }) => {
  console.log("props___", flightsData);

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <div className="js-accordion" key={item.id}>
            <div className="py-30 px-30 bg-white rounded-4 base-tr mt-30">
              <div className="row y-gap-30 justify-between">
                <div className="col">
                  <div className="row y-gap-10 items-center">
                    <div className="col-sm-auto">
                      <img
                        className="size-40"
                        src={item.icon || "/img/flightIcons/1.png"}
                        alt="image"
                      />
                    </div>
                    <div className="col">
                      <div className="row x-gap-20 items-end">
                         <div className="col-auto">
                          <div className="lh-15 fw-500">{item.departTime}</div>
                          <div className="text-15 lh-15 text-light-1">
                            {item.origin}
                          </div>
                        </div>
                        <div className="col text-center">
                          <div className="flightLine">
                            <div />
                            <div />
                          </div>
                          <div className="text-15 lh-15 text-light-1 mt-10">
                            Nonstop
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="lh-15 fw-500">{item.arrivalTime}</div>
                          <div className="text-15 lh-15 text-light-1">
                            {item.destination}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-auto">
                      <div className="text-15 text-light-1 px-20 md:px-0">
                        {item.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="d-flex items-center h-full">
                    <div className="pl-30 border-left-light h-full md:d-none" />
                    <div>
                      <div className="text-right md:text-left mb-10">
                        <div className="text-18 lh-16 fw-500">
                          ${item.price}
                        </div>
                        <div className="text-15 lh-16 text-light-1">
                          {item.deals} deals
                        </div>
                      </div>
                      <div className="accordion__button">
                        <button
                          className="button -dark-1 px-30 h-50 bg-blue-1 text-white"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.selectId}`}
                        >
                          Book Deal{" "}
                          <div className="icon-arrow-top-right ml-15" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No flights available..</div>
      )}
    </>
  );
};

 

export default FlightProperties;
