'use client';

import { useState, useEffect } from 'react';
import Pagination from '../../common/Pagination';
import ActionsButton from '../components/ActionsButton';

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    'All Booking',
    'Completed',
    'Processing',
    'Confirmed',
    'Cancelled',
    'Paid',
    'Unpaid',
    'Partial Payment',
  ];

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token'); // Ensure the token is stored with the key 'token'
      if (!token) {
        console.error('No token found in localStorage');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://amadeus-backend.onrender.com/flight/booking', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings available.</div>;
  }

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? 'is-tab-el-active' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Type</th>
                    <th>Title</th>
                    <th>Order Date</th>
                    <th>Execution Time</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Remain</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => {
                    const {
                      _id,
                      details: {
                        data: {
                          flightOffers,
                          associatedRecords,
                        },
                      },
                      createdAt,
                    } = booking;

                    const {
                      itineraries,
                      price: { currency, total },
                    } = flightOffers[0];

                    const { reference } = associatedRecords[0];

                    const executionTime = itineraries[0].segments
                      .map(
                        (segment) =>
                          `Departure: ${new Date(segment.departure.at).toLocaleString()}\nArrival: ${new Date(segment.arrival.at).toLocaleString()}`
                      )
                      .join('\n');

                    return (
                      <tr key={_id}>
                        <td>Flight</td>
                        <td>{reference}</td>
                        <td>{new Date(createdAt).toLocaleDateString()}</td>
                        <td className="lh-16" style={{ whiteSpace: 'pre-line' }}>
                          {executionTime}
                        </td>
                        <td className="fw-500">
                          {currency} {total}
                        </td>
                        <td>{currency} 0</td>
                        <td>{currency} {total}</td>
                        <td>
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                            Pending
                          </span>
                        </td>
                        <td>
                          <ActionsButton />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
