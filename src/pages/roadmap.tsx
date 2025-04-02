"use client";
import { motion } from "framer-motion";

const Roadmap: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Car Training",
      description:
        "Learn the fundamentals of driving, including vehicle handling, road safety, and traffic awareness.",
      color: "bg-blue-600",
      textColor: "text-blue-600",
      points: [
        "Master basic vehicle controls like steering, braking, and accelerating.",
        "Learn traffic rules, road signs, and lane discipline.",
        "Gain practical on-road driving experience in various conditions.",
        "Understand defensive driving techniques for safety.",
        "Practice reversing, parallel parking, and hill starts.",
      ],
    },
    {
      id: 2,
      title: "License Courses",
      description:
        "Choose the right license class (LMV, MCWG, etc.) and prepare thoroughly for the licensing exam.",
      color: "bg-green-600",
      textColor: "text-green-600",
      points: [
        "Attend theory classes to understand driving laws and safety practices.",
        "Take mock tests to prepare for the learner's license exam.",
        "Receive assistance with all required documentation and forms.",
        "Opt for specialized training for two-wheelers or light motor vehicles.",
        "Understand emergency handling and first-aid basics.",
      ],
    },
    {
      id: 3,
      title: "Direct License",
      description:
        "Obtain your learner's and permanent driver's licenses with professional guidance.",
      color: "bg-yellow-600",
      textColor: "text-yellow-600",
      points: [
        "Fast-track licensing options for those with prior experience.",
        "Receive personalized guidance for the driving license test.",
        "Attend in-depth practice sessions focusing on road test scenarios.",
        "Participate in mock tests to simulate final exam conditions.",
        "Learn tips to handle advanced driving maneuvers during the test.",
      ],
    },
    {
      id: 4,
      title: "Transport License",
      description:
        "Advance your skills and qualify for a transport license to drive commercial vehicles.",
      color: "bg-red-600",
      textColor: "text-red-600",
      points: [
        "Specialized training for heavy motor vehicles (HMVs) like trucks and buses.",
        "Understand cargo transportation rules and passenger vehicle regulations.",
        "Practice vehicle inspection and maintenance routines.",
        "Gain knowledge of transport documentation and compliance requirements.",
        "Receive assistance with government approvals for licensing.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-8">
      <h1 className="font-bold leading-tight mb-6 font-serif text-5xl font-bold text-center text-[#1f3044] mb-20">
        Driving School Roadmap
      </h1>

      {/* Roadmap container */}
      <div className="relative flex flex-col items-center space-y-16">
        {/* Vertical Line */}
        <div className="absolute h-full border-l-4 border-[#F2BFA4] top-0 left-1/2 transform -translate-x-1/2 z-0"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center space-x-8 w-full max-w-4xl relative z-10 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Step Number */}
            <div
              className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
            >
              {step.id}
            </div>

            {/* Step Content */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-2xl rounded-2xl p-8 w-full transition-transform duration-300"
            >
              <h2 className={`text-2xl font-bold ${step.textColor} mb-4`}>
                {step.title}
              </h2>
              <p className="text-gray-700">{step.description}</p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-1">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
