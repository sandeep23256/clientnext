'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePlacementDisplayQuery } from '../../redux/features/placement/placementApi'

export default function PlacementPublicSection() {
  const { data, isLoading } = usePlacementDisplayQuery()
  const students = data || []

  if (isLoading) return <p className="text-center py-10">Loading...</p>

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Students Who Got Placed</h2>

      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {students.map((student, index) => (
          <motion.div
            key={student._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={student.image?.url || '#'}
              alt={student.name}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <p className="text-sm">{student.position}</p>
              <p className="text-xs">{student.company || 'Placed at Company'}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
