'use client'

import React, { useState, useEffect } from 'react';
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from 'react';
// import DateSearch from "../../../components/hero/DateSearch";
// import GuestSearch from "../../../components/hero/hero-10/GuestSearch";
// import FlyingFromLocation from "../../../components/hero/hero-10/FlyingFromLocation";
// import FlyingToLocation from "../../../components/hero/hero-10/FlyingToLocation";
// import { useRouter } from "next/navigation";

const MainFilterSearchBox = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    returnDate: '',
    adults: 1,
    children: 0,
  });
  const Router = useRouter();

  useEffect(() => {
    // Perform actions after formData has been updated
    console.log('formData updated:', formData);
  }, [formData]);


  const [guestCounts, setGuestCounts] = useState({ });
  
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
        return nativeDate.toISOString().split('T')[0];
      }
      return '';
    };

    setFormData((prevData) => ({
      ...prevData,
      date: formatDate(dates[0]),
      returnDate: formatDate(dates[1]),
    }));
  };

  const handleSearch = async () => {
    // Retrieve the Bearer token from localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (!token) {
      console.error('No token found in localStorage');
      return;
    }

    try {
      const response = await fetch('https://amadeus-backend.onrender.com/flight/search-flight', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Flight search results:', data);
      Router.push("/flight-list-v1");
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  return (
    <div className="mainSearch -col-4 -w-1070 bg-white shadow-1 rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15">
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
    </div>
  );
};

export default MainFilterSearchBox;
