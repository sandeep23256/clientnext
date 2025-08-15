'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { usePortfolioDisplayQuery } from '../../redux/features/portfolio/portfolioApi'


export default function Portfolio() {
  const { data = [], isLoading } = usePortfolioDisplayQuery()
  const ports = data

  if (isLoading) return <p className="text-center py-10">Loading...</p>

  return (
    <div className="w-100% bg-white mx-auto p-6 sm:p-10 pb-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Our</h1>
        <span className="text-blue-600 text-4xl sm:text-5xl font-bold block mt-4">
          Portfolio
        </span>
      </div>

      {/* Portfolio Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {ports.map((item) => (
          <motion.a
            key={item._id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden transform transition-transform duration-300"
          >
            <img
              src={item.image?.url || '#'}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-lg font-light mb-3">{item.description}</p>
              <div className="flex items-center justify-center text-blue-600 font-semibold gap-2">
                <span>Click to view project</span>
                <FiArrowRight className="text-xl" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
