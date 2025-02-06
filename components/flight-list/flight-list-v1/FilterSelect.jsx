
'use client'

import { useState } from "react";

const FilterSelect = () => {
  const [returnValue, setReturnValue] = useState("One-Way");
  const [economyValue, setEconomyValue] = useState("Economy");
  const [bagsValue, setBagsValue] = useState("0 Bags");

  const handleReturnValueChange = (value) => {
    setReturnValue(value);
  };

  const handleEconomyValueChange = (value) => {
    setEconomyValue(value);
  };

  const handleBagsValueChange = (value) => {
    setBagsValue(value);
  };

  const dropdownOptions = [
    {
      title: "Return",
      value: returnValue,
      list: [
        { label: "One-Way" },
        { label: "Round-Trip" },
        { label: "Multi-City" },
        { label: "Calendar Fare" },
      ],
      onChange: handleReturnValueChange,
    },
    {
      title: "Economy",
      value: economyValue,
      list: [{ label: "Economy" }, { label: "Flexi" }, { label: "Business" }],
      onChange: handleEconomyValueChange,
    },
  ];

  return (
    <>
      {dropdownOptions.map((option, index) => (
        <div className="col-auto" key={index}>
          <div className="dropdown js-dropdown">
            <div
              className="dropdown__button d-flex items-center text-15"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              data-bs-offset="0,0"
            >
              <span className="js-dropdown-title">{option.value}</span>

              <i className="icon icon-chevron-sm-down text-7 ml-10" />
            </div>
            <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
              <div className="text-14 y-gap-15 js-dropdown-list">
                {option.list.map((item, index) => (
                  <div key={index}>
                    <div
                      role="button"
                      className={`${
                        item.label === option.value ? "text-blue-1 " : ""
                      }d-block js-dropdown-link`}
                      onClick={() => option.onChange(item.label)}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FilterSelect;
