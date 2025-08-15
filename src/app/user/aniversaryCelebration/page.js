'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const AniversaryCelebration = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151245/PN_INFOSYS/a1_hkv6lx.jpg',
      alt: 'Image 1',
    },
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151245/PN_INFOSYS/a8_m3r8xc.png',
      alt: 'Image 2',
    },
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a4_xtasi3.png',
      alt: 'Image 3',
    },
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a2_bvppmj.png',
      alt: 'Image 4',
    },
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a3_cexhkb.png',
      alt: 'Image 5',
    },
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a5_mlvyf7.png',
      alt: 'Image 6',
    },
    {
      src: 'https://res.cloudinary.com/dow1049t2/image/upload/v1729151246/PN_INFOSYS/a7_a2ugji.png',
      alt: 'Image 7',
    },
  ]

  return (
    <main className='mt-35'>
      {/* Hero Section */}
      <section>
        <div className="relative h-[80vh] bg-cover bg-center flex justify-center items-center text-white text-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dow1049t2/image/upload/v1728743695/PN_INFOSYS/unnamed_qzboly.png')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />

          {/* Optional overlay */}
          <Image
            src="https://res.cloudinary.com/dow1049t2/image/upload/v1728743507/PN_INFOSYS/page-heading-bg_i9miyf.png"
            alt="Overlay"
            fill
            className="object-cover opacity-30 z-0"
          />

          <div className="relative z-10 space-y-4 px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Anniversary Celebration</h1>
            <p className="text-sm md:text-base text-gray-300">
              <a className="text-white font-medium" href="/">Home</a> / Celebration
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-pink-500 font-bold text-center mb-1">Pn Infosys Celebration</h2>
          <h2 className="text-xl font-sans text-center mb-10">Company Celebration</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-500 hover:scale-110 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1000}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default AniversaryCelebration
