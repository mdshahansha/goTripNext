'use client'

import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import ReviewBooking from "../ReviewBooking"; // Import the new component
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Traveler Details",
      stepNo: "1",
      stepBar: (
        <div className="col d-none d-sm-block">
          <div className="w-full h-1 bg-border"></div>
        </div>
      ),
      content: <CustomerInfo />,
    },
    {
      title: "Review Booking",
      stepNo: "2",
      stepBar: (
        <div className="col d-none d-sm-block">
          <div className="w-full h-1 bg-border"></div>
        </div>
      ),
      content: <ReviewBooking />, // New step added
    },
    {
      title: "Payment Info",
      stepNo: "3",
      stepBar: (
        <div className="col d-none d-sm-block">
          <div className="w-full h-1 bg-border"></div>
        </div>
      ),
      content: <PaymentInfo />,
    },
    {
      title: "Order Summary",
      stepNo: "4",
      stepBar: "",
      content: <OrderSubmittedInfo />,
    },
  ];

  const renderStep = () => {
    return steps[currentStep].content;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                onClick={() => index <= currentStep && setCurrentStep(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep > index ? (
                    <i className="icon-check text-16 text-white"></i>
                  ) : (
                    <span>{step.stepNo}</span>
                  )}
                </div>
                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>

      <div className="row">{renderStep()}</div>

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>

        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            disabled={currentStep === steps.length - 1}
            onClick={nextStep}
          >
            Next <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
