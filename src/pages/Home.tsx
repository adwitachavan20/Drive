import React from "react";
import { ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookingForm from "./book";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Car, BookOpen, CheckCircle } from "lucide-react";
import { app } from "../firebaseConfig"; 




const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = (): void => {
    navigate("/registration");
  };

  const handleMockTestClick = (): void => {
    navigate("/MockTest");
 
  };

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  

  return (
    <div className="relative min-h-screen bg-white text-[#121829]">
      {/* Swiper Slider Below Navbar */}
      <motion.div
        className="w-full max-h-[400px] overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src="drive.png"
              alt="Driving Lesson 1"
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="driving2.webp"
              alt="Driving Lesson 2"
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="driving.webp"
              alt="Driving Lesson 1"
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Left Side - Main Text */}
<motion.div
  className="w-full md:w-1/2 text-left md:pl-8"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
>
<h1 className="text-5xl font-bold leading-tight mb-6 font-serif tracking-wide pl-4 md:pl-8 -mt-4">
      <span className="block text-[#121829]">Drive with</span>
      <span className="block text-[#121829]">Confidence</span>
    </h1>
  <p className="text-lg text-[#001730]/80 mb-8 leading-relaxed font-light pl-4 md:pl-8">
    Learn from experienced, certified instructors. Personalized lessons at your own pace.
    Get your driving license with ease!
  </p>
  <motion.button
    onClick={handleGetStartedClick}
    className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#3F5273] transition duration-300 shadow-lg flex items-center mx-auto md:ml-8 backdrop-blur-md bg-opacity-85 hover:scale-[1.05]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    Get Started <ChevronRight className="ml-2 h-6 w-6" />
  </motion.button>
</motion.div>


        {/* Right Side - Mock Test Section */}
        <motion.div
      className="w-full md:w-1/2 bg-[#E5E8FB] p-8 rounded-xl shadow-lg text-center md:ml-10 mt-10 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-2xl font-bold text-[#182978] mb-4">
        Now discover how good a driver you are!
      </h2>
      <p className="text-sm text-gray-700 mb-4">
        Test your driving skills before you get on the road. Simply answer these 10 challenging questions and score your best. Gear up and go on!
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
          <span className="text-xl font-bold text-[#182978]">10</span>
          <span className="text-gray-600 text-sm">MINUTES TO FINISH</span>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
          <span className="text-xl font-bold text-[#182978]">10</span>
          <span className="text-gray-600 text-sm">ENGAGING QUESTIONS</span>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
          <span className="text-xl font-bold text-[#182978]">4</span>
          <span className="text-gray-600 text-sm">INTERESTING QUESTION CATEGORIES</span>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
          <span className="text-xl font-bold text-[#182978]">4530</span>
          <span className="text-gray-600 text-sm">QUIZ WINNERS</span>
        </div>
      </div>

      <motion.button
        onClick={handleMockTestClick}
        className="bg-[#182978] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#101A5A] transition duration-300 shadow-md hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        GET STARTED
      </motion.button>
    </motion.div>
      </section>

      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 md:px-16">


      {/* Courses Container */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 md:px-16">
      {/* Course Containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Learner Standard Track Course */}
        <motion.div
          className="bg-gradient-to-b from-white to-[#E6E9F5] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-[#182978] mb-4">Learner Standard Track Course</h2>
          <p className="text-gray-700">
            If you've never been behind the steering wheel, this course is for you. At the end of 21 days, 
            you'll know the basic traffic rules and gain a hands-on driving experience through...
          </p>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">6</p>
              <p className="text-gray-700 text-sm">Number of Modules</p>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">21</p>
              <p className="text-gray-700 text-sm">Number of Hours</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#182978] mt-6">₹ 5,500*</p>
          <p className="text-sm text-gray-500">(*Starting Course Fees, excl. 18% GST)</p>
          <button className="mt-4 bg-[#182978] text-white px-6 py-2 rounded-lg hover:bg-[#0F1E56] transition">
            View Course
            </button>
        </motion.div>

        {/* Learner Extended Track Course */}
        <motion.div
          className="bg-gradient-to-b from-white to-[#E6E9F5] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#182978] mb-4">Learner Extended Track Course</h2>
          <p className="text-gray-700">
            If you've never been behind the steering wheel, this course is for you. At the end of 26 days, 
            you'll know the basic traffic rules and gain a hands-on driving experience through...
          </p>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">6</p>
              <p className="text-gray-700 text-sm">Number of Modules</p>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">26</p>
              <p className="text-gray-700 text-sm">Number of Hours</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#182978] mt-6">₹ 7,500*</p>
          <p className="text-sm text-gray-500">(*Starting Course Fees, excl. 18% GST)</p>
          <button className="mt-4 bg-[#182978] text-white px-6 py-2 rounded-lg hover:bg-[#0F1E56] transition">
            View Course
            </button>
        </motion.div>
      </div>
    </div>
    </div>

      {/* Google Map Locator */}
<section className="w-full py-10">
  <h2 className="text-3xl font-bold text-center mb-6">Find Us Here</h2>
  <p>Branch</p>
  <div className="w-full h-[400px]">
    <iframe
      className="w-full h-full rounded-lg shadow-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.534290351052!2d72.8468483!3d19.2006418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6cf85555555%3A0x6206c4a2f9294c4c!2sKandivali%20Motor%20Training%20School!5e0!3m2!1sen!2sin!4v1646401065065!5m2!1sen!2sin"
      allowFullScreen={true}
      loading="lazy"
    ></iframe>
    
  </div>
</section>

      {/* Courses Container */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 md:px-16">
      {/* Course Containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Learner Standard Track Course */}
        <motion.div
          className="bg-gradient-to-b from-white to-[#E6E9F5] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-[#182978] mb-4">Learner Standard Track Course</h2>
          <p className="text-gray-700">
            If you've never been behind the steering wheel, this course is for you. At the end of 21 days, 
            you'll know the basic traffic rules and gain a hands-on driving experience through...
          </p>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">6</p>
              <p className="text-gray-700 text-sm">Number of Modules</p>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">21</p>
              <p className="text-gray-700 text-sm">Number of Hours</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#182978] mt-6">₹ 5,500*</p>
          <p className="text-sm text-gray-500">(*Starting Course Fees, excl. 18% GST)</p>
          <button className="mt-4 bg-[#182978] text-white px-6 py-2 rounded-lg hover:bg-[#0F1E56] transition">
            View Course
            </button>
        </motion.div>

        {/* Learner Extended Track Course */}
        <motion.div
          className="bg-gradient-to-b from-white to-[#E6E9F5] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#182978] mb-4">Learner Extended Track Course</h2>
          <p className="text-gray-700">
            If you've never been behind the steering wheel, this course is for you. At the end of 26 days, 
            you'll know the basic traffic rules and gain a hands-on driving experience through...
          </p>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">6</p>
              <p className="text-gray-700 text-sm">Number of Modules</p>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <p className="text-lg font-bold text-[#182978]">26</p>
              <p className="text-gray-700 text-sm">Number of Hours</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#182978] mt-6">₹ 7,500*</p>
          <p className="text-sm text-gray-500">(*Starting Course Fees, excl. 18% GST)</p>
          <button className="mt-4 bg-[#182978] text-white px-6 py-2 rounded-lg hover:bg-[#0F1E56] transition">
            View Course
            </button>
        </motion.div>
      </div>
    </div>

    {/* Register Your Interest Button - Fixed Left */}
    <div>
      {/* Register Your Interest Button */}
      <button
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#182978] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg cursor-pointer"
        onClick={() => setIsBookingOpen(true)}
      >
        Register Your Interest +
      </button>

      {/* BookingForm Modal */}
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>

      {/* Reviews and Ratings Button */}
      <button
        className="fixed bottom-6 right-6 bg-[#4A5D85] text-white px-5 py-3 rounded-lg shadow-xl hover:bg-[#3F5273] transition duration-300 flex items-center backdrop-blur-md bg-opacity-85 hover:scale-[1.05]"
        onClick={() => navigate("/reviews")}
      >
        <Star className="mr-2 h-6 w-6" />
        <span className="text-lg font-semibold">Reviews & Ratings</span>
      </button>
    </div>
  );
};

export default Home;
