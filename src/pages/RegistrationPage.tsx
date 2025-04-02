import React, { useState } from "react";
//port { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import the auth instance from your Firebase configuration


const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [submissionStatus, setSubmissionStatus] = useState<string>("");
  const [form, setForm] = useState<{ [key: string]: string }>({});

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age -= 1;
    }
    return age;
  };

  const handleForm = (e: any) => {
    const { name, value } = e.target;

    // Update Date of Birth and calculate Age
    if (name === "dateOfBirth") {
      setDob(value);
      setAge(calculateAge(value));
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify({ ...form, age }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setSubmissionStatus("Form submitted successfully!");
      setForm({});
      setDob("");
      setAge("");
      e.target.reset();
      navigate("/login");
    } else {
      setSubmissionStatus("Submission failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User Signed In:", user);
      localStorage.setItem("token", user?.uid || '');
      alert("Successfully signed in with Google!");
      navigate("/profile");
    } catch (error: any) {
      console.error("Google Sign-In error:", error.message); // Now TypeScript knows `error` is of type `any`
      alert("Google Sign-In failed. Please try again.");
    }
  };
  
  

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl border border-gray-200">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#333]">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-[#333] font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                name="FullName"
                onChange={handleForm}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[#333] font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
                name="phoneNumber"
                onChange={handleForm}
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-[#333] font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                name="dateOfBirth"
                onChange={handleForm}
                required
              />
            </div>

            {/* Age (Read-Only) */}
            <div>
              <label className="block text-[#333] font-medium mb-2">Age</label>
              <input
                type="number"
                value={age}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                name="age"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[#333] font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                name="Email"
                onChange={handleForm}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#333] font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                name="password"
                onChange={handleForm}
                required
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#6c63ff] text-white py-3 rounded-lg hover:bg-[#574bff] transition duration-300 text-lg shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Success Message */}
        {submissionStatus && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-green-600">
              {submissionStatus}
            </p>
          </div>
        )}

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-[#555]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6c63ff] hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* Continue with Google Button */}
        <div className="mt-4 text-center">
        <button
  onClick={handleGoogleSignIn}  // Call handleGoogleSignIn when clicked
  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-gray-200 transition duration-300 text-lg shadow-md"
>
  Continue with Google
</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
