'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useEventDisplayQuery } from '../../redux/features/event/eventApi'


export default function EventCards() {
  const { data, isLoading } = useEventDisplayQuery()
  const events = data || []

  if (isLoading) return <p className="text-center py-10 text-lg">Loading events...</p>

  return (
    <div className="py-20 ">
      <h1 className="text-2xl font-bold text-gray-600 text-center mb-1">News</h1>
      <h2 className="text-4xl text-center text-blue-700 mb-6">Events</h2>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {events.map((event, index) => (
          <motion.div
            key={event._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={event.image?.url || '#'}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
