import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import Navbar
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import DrivingSimulator from "./pages/Drivingsimulator";
import RegistrationPage from "./pages/RegistrationPage";
import Syllabus from "./pages/Syllabus";
import Roadmap from "./pages/roadmap";
import LoginPage from "./pages/LoginPage";
import EnrollPage from "./pages/EnrollModal";
import ProfilePage from "./pages/ProfilePage";
import Reviews from "./pages/review";
import BookingForm from "./pages/book"; // ✅ Import BookingForm
import ParallelParking from "./pages/ParallelParking";
import MockTest from "./pages/MockTest";
import Cars from "./pages/Cars";
import Car from "./pages/Car";
import RecommendationModal from "./pages/RecommendationModal";
import PerpendicularParking from "./pages/PerpendicularParking";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null); // State for tracking user authentication

  {/*useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is logged in, update state
        console.log("User logged in:", user);
      } else {
        setUser(null); // No user logged in, clear state
        console.log("No user logged in");
      }
    });

    return () => unsubscribe(); // Clean up listener when the component is unmounted
  }, []);*/}

  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseRecommendationModal = () => setIsRecommendationModalOpen(false);

  const handleRecommend = (courses: string[]) => {
    setRecommendedCourses(courses);
    console.log("Recommended Courses:", courses);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar user={user} /> {/* Pass user state to Navbar */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drivingsimulator" element={<DrivingSimulator />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ParallelParking" element={<ParallelParking />} />
          <Route path="/MockTest" element={<MockTest />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/PerpendicularParking" element={<PerpendicularParking />} />
        </Routes>

        {/* ✅ BookingForm Modal (Appears when isModalOpen is true) */}
        {isModalOpen && <BookingForm isOpen={isModalOpen} onClose={handleCloseModal} />}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
