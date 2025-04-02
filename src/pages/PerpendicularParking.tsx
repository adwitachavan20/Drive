import React from "react";
import { useNavigate } from "react-router-dom";

const PerpendicularParking: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen py-24">
      <div className="bg-white shadow-lg rounded-lgp-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center py-4">
          Everything You Need To Know About Parallel Parking
        </h1>
        <p className="text-gray-700 text-center mb-4">
          Master the art of parallel parking with simple steps and techniques.
        </p>

        {/* Image Section */}
        <div className="flex justify-center my-4">
          <img
            src="Perpendicular.png"
            alt="Parallel Parking Guide"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Step-by-Step Guide */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Step-by-Step Guide</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Step 1: Find a Suitable Parking Spot</strong>
              <ul className="list-none pl-4">
                <li>🔹 Look for a space at least 1.5 times your car’s length.</li>
                <li>🔹 Check mirrors & use indicators to signal your intention.</li>
              </ul>
            </li>

            <li>
              <strong>Step 2: Align Your Car</strong>
              <ul className="list-none pl-4">
                <li>🔹 Stop parallel to the car in front of the parking space.</li>
                <li>🔹 Keep about 2-3 feet of distance between the vehicles.</li>
              </ul>
            </li>

            <li>
              <strong>Step 3: Start Reversing</strong>
              <ul className="list-none pl-4">
                <li>🔹 Turn the steering wheel fully to the right.</li>
                <li>🔹 Slowly reverse until your back right wheel aligns with the rear bumper of the parked car.</li>
              </ul>
            </li>

            <li>
              <strong>Step 4: Straighten the Wheels</strong>
              <ul className="list-none pl-4">
                <li>🔹 Turn the steering wheel back to the neutral position.</li>
                <li>🔹 Keep reversing straight into the parking spot.</li>
              </ul>
            </li>

            <li>
              <strong>Step 5: Final Adjustment</strong>
              <ul className="list-none pl-4">
                <li>🔹 Once your front bumper clears the rear car, turn the steering wheel left to align with the curb.</li>
                <li>🔹 Adjust forward or backward to center the car.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate("/Syllabus")} 
            className="text-blue-600 underline font-semibold hover:text-blue-800"
          >
            Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerpendicularParking;
