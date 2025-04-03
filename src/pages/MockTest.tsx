import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define mock tests
const mockTests = [
  [
    { question: "What is the speed limit in a residential area?", options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"], correct: "50 km/h" },
    { question: "What does a red traffic light mean?", options: ["Go", "Slow Down", "Stop", "Yield"], correct: "Stop" },
    { question: "Who has the right of way at an uncontrolled intersection?", options: ["The fastest vehicle", "The vehicle on the left", "The vehicle on the right", "Pedestrians only"], correct: "The vehicle on the right" },
    { question: "What should you do before changing lanes?", options: ["Signal and check mirrors", "Just signal", "Honk and move", "Speed up"], correct: "Signal and check mirrors" },
    { question: "When can you overtake a vehicle on the right?", options: ["In a one-way street", "Never", "On any road", "When the vehicle is turning left"], correct: "In a one-way street" },
    { question: "What should you do when approaching a school zone?", options: ["Increase speed", "Honk", "Slow down and watch for children", "Ignore signs"], correct: "Slow down and watch for children" },
    { question: "What does a flashing red light mean?", options: ["Stop and proceed when safe", "Go quickly", "Yield", "Ignore"], correct: "Stop and proceed when safe" },
    { question: "How often should you check your blind spots?", options: ["Every 5 seconds", "Before changing lanes", "Never", "Once per minute"], correct: "Before changing lanes" },
    { question: "What should you do if you hear an emergency vehicle siren?", options: ["Speed up", "Pull over to the right", "Ignore", "Honk back"], correct: "Pull over to the right" },
    { question: "How can you prevent drowsy driving?", options: ["Drink coffee", "Take regular breaks", "Turn up the radio", "Drive faster"], correct: "Take regular breaks" }
  ],
  [
    { question: "When should you use high beam headlights?", options: ["In fog", "At night on an empty road", "In heavy traffic", "Never"], correct: "At night on an empty road" },
    { question: "What should you do at a pedestrian crossing?", options: ["Speed up", "Honk and pass", "Stop for pedestrians", "Ignore"], correct: "Stop for pedestrians" },
    { question: "What is the main purpose of ABS (Anti-lock Braking System)?", options: ["Increase speed", "Prevent skidding", "Reduce fuel consumption", "Make turns smoother"], correct: "Prevent skidding" },
    { question: "What should you do if your car starts hydroplaning?", options: ["Brake hard", "Steer sharply", "Ease off the gas and steer straight", "Speed up"], correct: "Ease off the gas and steer straight" },
    { question: "How should you approach a sharp curve?", options: ["Accelerate", "Slow down before entering", "Honk and go", "Close your eyes"], correct: "Slow down before entering" },
    { question: "What should you do in case of a tire blowout?", options: ["Brake immediately", "Grip the steering wheel firmly and slow down gradually", "Honk and stop", "Turn sharply"], correct: "Grip the steering wheel firmly and slow down gradually" },
    { question: "What should you do if you miss your exit on a highway?", options: ["Reverse back", "Take the next exit", "Stop immediately", "Make a U-turn"], correct: "Take the next exit" },
    { question: "What is tailgating?", options: ["Following another vehicle too closely", "Overtaking recklessly", "Driving in the middle lane", "Driving slowly"], correct: "Following another vehicle too closely" },
    { question: "What does a flashing yellow traffic light mean?", options: ["Stop", "Proceed with caution", "Speed up", "No entry"], correct: "Proceed with caution" },
    { question: "How often should you check your mirrors while driving?", options: ["Every 5 seconds", "Every 10-15 seconds", "Once a minute", "Never"], correct: "Every 10-15 seconds" }
  ],
  [
    { question: "What should you do if your brakes fail?", options: ["Turn off the engine", "Pull the handbrake slowly", "Jump out", "Press the horn"], correct: "Pull the handbrake slowly" },
    { question: "What does a no-entry sign mean?", options: ["Do not enter", "One-way street", "Pedestrian zone", "No honking"], correct: "Do not enter" },
  ],
  [
    { question: "What does a solid white line on the road mean?", options: ["No lane changing", "You can overtake", "Pedestrian zone", "Parking allowed"], correct: "No lane changing" },
    { question: "What is the minimum safe following distance?", options: ["1 second", "2 seconds", "3 seconds", "5 seconds"], correct: "3 seconds" },
  ],
];

const MockTest: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<{ question: string; options: string[]; correct: string }[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  // Select a random test on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mockTests.length);
    setSelectedTest(mockTests[randomIndex]);
  }, []);

  // Countdown Timer
  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setSubmitted(true); // Auto-submit when timer runs out
    }
  }, [timeLeft, submitted]);

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <motion.div
      className="w-[600px] bg-white p-6 rounded-lg shadow-lg text-center py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Mock Driving Test</h2>

      {/* Timer */}
      <div className="text-lg font-semibold text-red-600 mb-4">
        Time Left: {formatTime(timeLeft)}
      </div>

      {selectedTest.map((q, index) => (
        <div key={index} className="mb-4 text-left">
          <p className="font-medium">{q.question}</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {q.options.map((option) => (
              <button
                key={option}
                className={`py-2 px-4 rounded-lg border ${userAnswers[index] === option ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => handleAnswerSelect(index, option)}
                disabled={submitted}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!submitted ? (
        <motion.button
          onClick={handleSubmit}
          className="bg-[#4A5D85] text-white px-6 py-3 rounded-lg text-lg font-medium mt-4 hover:bg-[#3F5273] transition duration-300 shadow-md"
        >
          Submit
        </motion.button>
      ) : (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-600">Correct Answers</h3>
          {selectedTest.map((q, index) => (
            <p key={index} className={`mt-2 ${userAnswers[index] === q.correct ? "text-green-600" : "text-red-600"}`}>
              {q.question} - <strong>{q.correct}</strong>
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MockTest;
