import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";  // Firebase Auth imports
import { auth } from '../firebaseConfig'; // Import Firebase auth from firebase-config

const LoginPage: React.FC = () => {
    const [form, setForm] = useState<{ phoneNumber: string; password: string }>({
        phoneNumber: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/demo/login", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("Response Data:", data);

            if (data.status === "success" && data.token) {
                localStorage.setItem("token", data.token); // Store token
                alert("You have successfully logged in!");
                navigate("/profile"); // Navigate to ProfilePage
            } else {
                alert("Incorrect data or user does not exist");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    // Google Sign-In Function
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();  // Create Google Auth provider
    
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google User Signed In:", user);
    
            // Store the user's information or navigate to another page
            localStorage.setItem("token", user?.uid || ''); // Store token or UID
            alert("Successfully signed in with Google!");
            navigate("/profile"); // Navigate to ProfilePage after login
        } catch (error: unknown) {  // Explicitly type 'error' as 'unknown'
            if (error instanceof Error) {  // Narrow down the error type
                console.error("Google Sign-In error:", error.message);
                alert("Google Sign-In failed. Please try again.");
            } else {
                console.error("Unknown error:", error);  // Handle case for non-Error objects
                alert("An unknown error occurred. Please try again.");
            }
        }
    };
    

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Log In to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleForm}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            name="password"
                            value={form.password}
                            onChange={handleForm}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/registration" className="text-blue-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <button
                        onClick={signInWithGoogle}  // Trigger Google Sign-In
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
