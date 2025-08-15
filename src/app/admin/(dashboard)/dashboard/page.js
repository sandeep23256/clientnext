"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const DashboardPage = () => {
  const cards = [
    {
      title: "Total Sliders",
      value: 8,
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: "Total Users",
      value: 120,
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Total Courses",
      value: 25,
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Welcome Admin 👋
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 120,
            }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              transitionSpeed={2500}
            >
              <div
                className={`bg-gradient-to-r ${card.gradient} text-white p-6 rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform transition-all duration-300`}
              >
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-5xl mt-3 font-bold">{card.value}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
