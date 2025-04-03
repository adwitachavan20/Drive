import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Syllabus: React.FC = () => {
  const navigate = useNavigate();

  const tips = [
    {
      title: "Everything You Need To Know About Parallel Parking",
      description:
        "If you get sweaty palms just thinking about parallel parking, trust us, you are not the only one. Master parallel parking easily.",
      link: "/ParallelParking",
      image: "/images/parallel1.png",
    },
    {
      title: "Everything You Need To Know About Perpendicular Parking",
      description:
        "If you get sweaty palms just thinking about parallel parking, trust us, you are not the only one. Master parallel parking easily.",
      link: "/PerpendicularParking",
      image: "/images/Perpendicular.png",
    },
    {
      title: "5 Car Driving Tips That Make You a Better Driver",
      description:
        "There’s no age for learning, and the scope of learning is infinite. When it comes to driving, follow these 5 expert tips.",
      link: "/BetterDrivingTips",
      image: "/images/better-driving.png",
    },
    {
      title: "Top 10 Road Safety Tips You Should Know",
      description:
        "Safety must come first on your list when driving, be it for yourself and the passengers, pedestrians, or other drivers.",
      link: "/RoadSafetyTips",
      image: "/images/road-safety.png",
    },
  ];

  const roadSigns = [
    { title: "Right Curve", image: "/images/right-curve.png" },
    { title: "Left Curve", image: "/images/left-curve.png" },
    { title: "Traffic Lights Ahead", image: "/images/traffic-light.png" },
    { title: "Crossroads Road", image: "/images/crossroad.png" },
    { title: "Stop", image: "/images/stop-sign.png" },
    { title: "Road Narrow", image: "/images/road-narrow.png" },
  ];

  const licenseProcess = [
    {
      title: "Step 1: Apply for a Learner's Permit",
      description: "Submit the required documents and fees to get your learner's permit.",
      image: "/images/learners-permit.png",
    },
    {
      title: "Step 2: Complete Driver Training",
      description: "Enroll in a certified driving school and complete your training hours.",
      image: "/images/driver-training.png",
    },
    {
      title: "Step 3: Schedule a Driving Test",
      description: "Book your driving test appointment with the local transport authority.",
      image: "/images/driving-test.png",
    },
    {
      title: "Step 4: Pass the Driving Test",
      description: "Demonstrate your driving skills to get approval for your license.",
      image: "/images/pass-test.png",
    },
    {
      title: "Step 5: Receive Your Driving License",
      description: "Once you pass, your license will be issued. Drive responsibly!",
      image: "/images/driving-license.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 pt-24">
      <h1 className="text-4xl font-bold leading-tight mb-6 font-serif tracking-wide text-left text-blue-900">
        Driving Tips
      </h1>

      {/* Swiper Slider - Driving Tips */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="max-w-6xl"
      >
        {tips.map((tip, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-4 h-[400px]">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex flex-col justify-between flex-grow px-4 pt-4">
                <h2 className="text-lg font-bold text-blue-900">{tip.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{tip.description}</p>
                <button
                  onClick={() => navigate(tip.link)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Road Safety Signage Section */}
      <div className="w-full bg-gray-200 py-10 mt-10">
        <h2 className="text-3xl font-bold text-left text-gray-900 mb-6">
          Road Safety Signage
        </h2>

        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {roadSigns.map((sign, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={sign.image} alt={sign.title} className="w-20 h-20 mb-3" />
              <p className="text-gray-800 font-semibold">{sign.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* License Application Process - Swiper */}
      <div className="bg-white py-10 mt-10">
        <h2 className="text-3xl font-bold text-left text-blue-900 mb-6">
          License Application Process
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="max-w-6xl"
        >
          {licenseProcess.map((step, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center text-center p-6">
                <img src={step.image} alt={step.title} className="w-24 h-24 mb-4" />
                <h3 className="text-lg font-bold text-blue-900">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Syllabus;
