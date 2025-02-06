'use client'

import { useState } from "react";

const FlyingToLocation = ({ setFormData, formData }) => {
  const [searchValue, setSearchValue] = useState(formData.destination || "");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    { id: 1, name: "LHR", address: "Greater London, United Kingdom" },
    { id: 2, name: "JFK", address: "New York State, United States" },
    { id: 3, name: "CDG", address: "France" },
    { id: 4, name: "MAD", address: "Spain" },
    { id: 5, name: "JTR", address: "Greece" },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    setFormData((prevData) => ({ ...prevData, destination: item.name }));
  };

  return (
    <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
      <h4 className="text-15 fw-500 ls-2 lh-16">Flying To</h4>
      <input
        autoComplete="off"
        type="search"
        placeholder="Where are you going?"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setFormData((prevData) => ({ ...prevData, destination: e.target.value }));
        }}
        className="js-search js-dd-focus"
      />
      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          <ul className="y-gap-5 js-results">
            {locationSearchContent.map((item) => (
              <li
                key={item.id}
                className={`-link d-block col-12 text-left rounded-4 px-20 py-15 mb-1 ${selectedItem?.id === item.id ? 'active' : ''}`}
                onClick={() => handleOptionClick(item)}
              >
                <div className="d-flex">
                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                  <div className="ml-10">
                    <div className="text-15 lh-12 fw-500">{item.name}</div>
                    <div className="text-14 lh-12 text-light-1 mt-5">{item.address}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlyingToLocation;
