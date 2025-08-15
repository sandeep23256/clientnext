'use client'

import React, { useState } from 'react'
import { useTeamDisplayQuery } from '../../redux/features/team/teamApi'


export default function TeamSection() {
  const { data, isLoading } = useTeamDisplayQuery()
  const teams = data || []

  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  if (isLoading) return <p className="text-center py-10">Loading...</p>

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-100 to-white  bg-gray-100 text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
        <p className="text-2xl text-blue-700 font-semibold">Meet our Team Members</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teams.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center min-h-[60px] flex flex-col items-center justify-start group transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-red-500 cursor-pointer"
              onClick={() => openModal(member.image?.url)}
            >
              <img
                src={member.image?.url || '#'}
                alt={member.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mt-5">{member.name}</h3>
            <p className="text-base text-blue-600">{member.position}</p>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
            <img src={selectedImage} alt="Preview" className="w-full rounded-lg" />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
