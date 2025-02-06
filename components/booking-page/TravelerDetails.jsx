import { useState } from "react";

const TravelerDetails = () => {
    const [travelers, setTravelers] = useState([
        { firstName: "", lastName: "", dob: "", passport: "" },
        { firstName: "", lastName: "", dob: "", passport: "" }, // Default 2 travelers
    ]);

    // Function to add a new traveler
    const addTraveler = () => {
        setTravelers([...travelers, { firstName: "", lastName: "", dob: "", passport: "" }]);
    };

    // Function to remove a traveler
    const removeTraveler = (index) => {
        if (travelers.length > 1) { // Allow removal if more than 1 traveler exists
            setTravelers(travelers.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="mt-40" style={{ minHeight: "350px" }}>
            {travelers.map((_, index) => (
                <div key={index} className="border-bottom pb-20 mb-20">
                    <div className="d-flex justify-between align-items-center">
                        <h3 className="text-18 fw-500">Traveler {index + 1}</h3>

                        {/* Remove Traveler Button (Allow removing only if more than 1 traveler exists) */}
                        {travelers.length > 1 && (
                            <button
                                onClick={() => removeTraveler(index)}
                                className="text-red-1 fw-500 text-14 bg-transparent border-0"
                            >
                                ✖ Remove
                            </button>
                        )}
                    </div>

                    <div className="row x-gap-20 y-gap-20 mt-10">
                        {/* First Name */}
                        <div className="col-md-6">
                            <div className="form-input">
                                <input type="text" required />
                                <label className="lh-1 text-16 text-light-1">First Name</label>
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-md-6">
                            <div className="form-input">
                                <input type="text" required />
                                <label className="lh-1 text-16 text-light-1">Last Name</label>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="col-md-6">
                            <div className="form-input">
                                <input
                                    type="text"
                                    required
                                    onFocus={(e) => {
                                        e.target.type = "date"; // Show date picker when focused
                                        e.target.showPicker(); // Opens calendar immediately
                                    }}
                                    onBlur={(e) => {
                                        if (!e.target.value) e.target.type = "text"; // Hides "yyyy-mm-dd" when empty
                                    }}
                                />
                                <label className="lh-1 text-16 text-light-1">Date of Birth</label>
                            </div>
                        </div>

                        {/* Passport Number */}
                        <div className="col-md-6">
                            <div className="form-input">
                                <input type="text" required />
                                <label className="lh-1 text-16 text-light-1">Passport Number</label>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Add Traveler Button */}
            <button
                onClick={addTraveler}
                className="mt-20 px-20 py-10 bg-blue-1 text-white fw-500 rounded-4"
            >
                + Add Traveler
            </button>
        </div>
    );
};

export default TravelerDetails;
