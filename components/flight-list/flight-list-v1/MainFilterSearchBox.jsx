"use client";

// import React, { useState, useEffect } from 'react';
// import DateSearch from "../DateSearch";
// import GuestSearch from "./GuestSearch";
// import FlyingFromLocation from "./FlyingFromLocation";
// import FlyingToLocation from "./FlyingToLocation";
// import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import DateSearch from "../../../components/hero/DateSearch";
import GuestSearch from "../../../components/hero/hero-10/GuestSearch";
import FlyingFromLocation from "../../../components/hero/hero-10/FlyingFromLocation";
import FlyingToLocation from "../../../components/hero/hero-10/FlyingToLocation";
import { useRouter } from "next/navigation";
import FlightProperties from "./FlightProperties";
import data from "../../../data/flights";

const MainFilterSearchBox = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    returnDate: "",
    adults: 1,
    children: 0,
  });
  const [flights, setFlights] = useState([]); // State to store flight data

  const Router = useRouter();
  const handleBookDealClick = () => {
    Router.push("/booking-page");
  };

  useEffect(() => {
    // Perform actions after formData has been updated
    console.log("formData updated:", formData);
  }, [formData]);

  const [guestCounts, setGuestCounts] = useState({});

  const handleCounterChange = (name, value) => {
    setGuestCounts((prev) => {
      const updatedCounts = { ...prev, [name]: value };
      setFormData((prevData) => ({
        ...prevData,
        adults: updatedCounts.Adults,
        children: updatedCounts.Children,
        // infants: updatedCounts.Infants,
      }));
      return updatedCounts;
    });
  };

  const setOrigin = (origin) => {
    setFormData((prevData) => ({ ...prevData, origin }));
  };

  const setDestination = (destination) => {
    setFormData((prevData) => ({ ...prevData, destination }));
  };

  const handleDateChange = (dates) => {
    // Convert DateObject to native Date and format as 'YYYY-MM-DD'
    const formatDate = (date) => {
      if (date) {
        const nativeDate = date.toDate();
        return nativeDate.toISOString().split("T")[0];
      }
      return "";
    };

    setFormData((prevData) => ({
      ...prevData,
      date: formatDate(dates[0]),
      returnDate: formatDate(dates[1]),
    }));
  };

  const handleSearch = async () => {
    // Retrieve the Bearer token from localStorage
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try {
      const response = await fetch(
        "https://amadeus-backend.onrender.com/flight/search-flight",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Flight search results:", data);

      setFlights(data.data); // Set the flight data when the API call is successful

      // Router.push("/flight-list-v1");
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  return (
    <div className="mainSearch -col-5 border-light rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15">
      <div className="button-grid items-center">
        <FlyingFromLocation setFormData={setFormData} formData={formData} />
        <FlyingToLocation setFormData={setFormData} formData={formData} />

        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Depart</h4>
            <DateSearch onDateChange={handleDateChange} />
          </div>
        </div>

        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Return</h4>
            <DateSearch onDateChange={handleDateChange} />
          </div>
        </div>

        <GuestSearch onCounterChange={handleCounterChange} />

        <div className="button-item">
          <button
            className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white"
            onClick={handleSearch}
          >
            <i className="icon-search text-20 mr-10" />
            Search
          </button>
        </div>
      </div>
      {console.log("FLIGHT ", flights)}

      {/* Conditionally render FlightProperties after search */}
      {flights.length > 0 ? 
      (
          
              flights.map((offer, index) => (
                <div className="js-accordion" key={index}>
                  <div className="py-30 px-30 bg-white rounded-4 base-tr mt-30">
                    <div className="row y-gap-30 justify-between">
                      <div className="col">
                        {offer.itineraries.map((itinerary, idx) => (
                          <div key={idx} className="row y-gap-10 items-center">
                            {itinerary.segments.map((segment, id) => (
                              <div key={id} className="col">
                                <div className="row x-gap-20 items-end">
                                  <div className="col-auto">
                                    <div className="lh-15 fw-500">
                                      {new Date(segment.departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                    <div className="text-15 lh-15 text-light-1">
                                      {segment.departure.iataCode}
                                    </div>
                                  </div>
                                  <div className="col text-center">
                                    <div className="flightLine">
                                      <div />
                                      <div />
                                    </div>
                                    <div className="text-15 lh-15 text-light-1 mt-10">
                                      {segment.numberOfStops > 0 ? `${segment.numberOfStops} stop(s)` : 'Nonstop'}
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="lh-15 fw-500">
                                      {new Date(segment.arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                    <div className="text-15 lh-15 text-light-1">
                                      {segment.arrival.iataCode}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div className="col-md-auto">
                              <div className="text-15 text-light-1 px-20 md:px-0">
                                Duration: {itinerary.duration}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
      
                      <div className="col-md-auto">
                        <div className="d-flex items-center h-full">
                          <div className="pl-30 border-left-light h-full md:d-none" />
                          <div>
                            <div className="text-right md:text-left mb-10">
                              <div className="text-18 lh-16 fw-500">
                                {offer.price.currency} {offer.price.total}
                              </div>
                              <div className="text-15 lh-16 text-light-1">
                                {offer.travelerPricings.length} traveler(s)
                              </div>
                            </div>
                            <div className="accordion__button">
                              <button
                                className="button -dark-1 px-30 h-50 bg-blue-1 text-white"
                                data-bs-toggle="collapse"
                                data-bs-target={`#offer-${index}`}
                                onClick={handleBookDealClick}
                              >
                               
                                Book Deal  
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
            ) 
      : null}
    
     

      {/* {setTimeout(() => { */}
    </div>
  );
};

export default MainFilterSearchBox;
