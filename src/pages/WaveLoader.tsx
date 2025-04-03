import { motion } from "framer-motion";

const WaveLoader = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Blue Circle */}
      <div className="w-16 h-16 bg-blue-500 rounded-full relative overflow-hidden">
        {/* More Pronounced Wavy Top (Animated) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-10 bg-gray-800" // Darker Wave
          style={{
            clipPath:
              "polygon(0% 60%, 10% 50%, 20% 65%, 30% 55%, 40% 70%, 50% 50%, 60% 75%, 70% 55%, 80% 65%, 90% 50%, 100% 60%, 100% 100%, 0% 100%)",
          }}
          animate={{ y: [0, -10, 0] }} // Increased movement
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default WaveLoader;
