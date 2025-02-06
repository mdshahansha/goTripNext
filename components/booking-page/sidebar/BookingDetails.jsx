import Image from "next/image";

const BookingDetails = () => {
  return (
    <div className="px-30 py-30 border-light rounded-4 shadow-sm bg-white">
      <div className="text-20 fw-600 mb-30">Your Booking Details</div>

      {/* Flight Info */}
      <div className="border-bottom pb-20 mb-20">
        <div className="fw-500 text-17">Flight from Bangalore to Singapore</div>
        <div className="text-14 text-light-1 mt-5">BLR - SIN</div>
      </div>

      {/* Departure & Arrival */}
      <div className="border-bottom pb-20 mb-20">
        <div className="row y-gap-20 justify-between">
          <div className="col-auto">
            <div className="text-15 text-dark-1">Departure</div>
            <div className="fw-500 text-16">Thu 21 Apr 2025</div>
            <div className="text-15 text-light-1">BLR – 23:00</div>
          </div>
          <div className="col-auto text-right md:text-left">
            <div className="text-15 text-dark-1">Arrival</div>
            <div className="fw-500 text-16">Sat 30 Apr 2025</div>
            <div className="text-15 text-light-1">SIN – 11:00</div>
          </div>
        </div>
      </div>

      {/* Traveler Details */}
      <div className="border-bottom pb-20 mb-20">
        <div className="text-15 text-dark-1">Traveler Details</div>
        <div className="fw-500 text-16 mt-5">2 Adults, 1 Child, 1 Infant</div>
      </div>

      {/* Fare Details */}
      <div className="pb-20">
        <div className="fw-500 text-16 mb-10">Cost Per Person</div>

        {/* Cost Per Person Table */}
        <table className="w-100 border-bottom pb-10 mb-20">
          <tbody>
            <tr>
              <td className="py-8 px-10 text-15">Adult</td>
              <td className="py-8 px-10 fw-500 text-right">₹5,000</td>
            </tr>
            <tr>
              <td className="py-8 px-10 text-15">Child</td>
              <td className="py-8 px-10 fw-500 text-right">₹3,000</td>
            </tr>
            <tr>
              <td className="py-8 px-10 text-15">Infant</td>
              <td className="py-8 px-10 fw-500 text-right">₹2,000</td>
            </tr>
          </tbody>
        </table>

        {/* Cost Per Category Table */}
        <div className="fw-500 text-16 mt-20 mb-10">Cost Per Category</div>
        <table className="w-100 border-bottom pb-10 mb-20">
          <tbody>
            <tr>
              <td className="py-8 px-10 text-15">Adults × 2</td>
              <td className="py-8 px-10 fw-500 text-right">₹10,000</td>
            </tr>
            <tr>
              <td className="py-8 px-10 text-15">Child × 1 </td>
              <td className="py-8 px-10 fw-500 text-right">₹3,000</td>
            </tr>
            <tr>
              <td className="py-8 px-10 text-15">Infant × 1 </td>
              <td className="py-8 px-10 fw-500 text-right">₹2,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Grand Total */}
      <div className="text-left">
        <div className="fw-600 text-18 text-primary">💰 Grand Total: ₹56,326</div>
      </div>
    </div>
  );
};

export default BookingDetails;
