import React from "react";
import { useNavigate } from "react-router-dom";

const AngularParking: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen py-24">
      <div className="bg-white shadow-lg rounded-lgp-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center py-4">
          Everything You Need To Know About Angular Parking
        </h1>
        <p className="text-gray-700 text-center mb-4">
          Master the art of Angular parking with simple steps and techniques.
        </p>

        {/* Image Section */}
        <div className="flex justify-center my-4">
          <img
            src="Angular.png"
            alt="Angular Parking Guide"
            className="rounded-lg shadow-md"
          />
        </div>

        Here's the step-by-step guide adapted for **Angle Parking**:  

```jsx
{/* Step-by-Step Guide */}
<div className="mt-6">
  <h2 className="text-2xl font-bold text-blue-800 mb-2">Step-by-Step Guide</h2>
  <ul className="list-disc pl-6 space-y-3 text-gray-700">
    <li>
      <strong>Step 1: Locate an Angle Parking Space</strong>
      <ul className="list-none pl-4">
        <li>🔹 Choose a space that fits your vehicle.</li>
        <li>🔹 Check surroundings for pedestrians and vehicles.</li>
        <li>🔹 Use your turn signal to indicate your intent.</li>
      </ul>
    </li>

    <li>
      <strong>Step 2: Position Your Car</strong>
      <ul className="list-none pl-4">
        <li>🔹 Approach the parking spot slowly.</li>
        <li>🔹 Keep a safe distance from parked cars on either side.</li>
      </ul>
    </li>

    <li>
      <strong>Step 3: Turn and Enter the Spot</strong>
      <ul className="list-none pl-4">
        <li>🔹 Turn the steering wheel smoothly in the direction of the spot.</li>
        <li>🔹 Move forward into the parking space at a steady pace.</li>
      </ul>
    </li>

    <li>
      <strong>Step 4: Straighten the Wheels</strong>
      <ul className="list-none pl-4">
        <li>🔹 Once inside the space, straighten your wheels.</li>
        <li>🔹 Ensure your car is centered within the lines.</li>
      </ul>
    </li>

    <li>
      <strong>Step 5: Final Check & Parking Brake</strong>
      <ul className="list-none pl-4">
        <li>🔹 Shift to park and engage the parking brake.</li>
        <li>🔹 Check mirrors before opening doors.</li>
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

export default AngularParking;
