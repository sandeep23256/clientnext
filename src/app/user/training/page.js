'use client'

import React from 'react'
import Image from 'next/image'

const Training = () => {
  return (
    <main className='mt-35'>
      {/* Hero Section */}
      <section>
        <div className="relative">
          <div
            className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dow1049t2/image/upload/v1728743695/PN_INFOSYS/unnamed_qzboly.png')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <img
              src="https://res.cloudinary.com/dow1049t2/image/upload/v1728743507/PN_INFOSYS/page-heading-bg_i9miyf.png"
              alt="Foreground"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 space-y-4 px-4">
              <h1 className="text-4xl md:text-5xl font-bold">Training</h1>
              <p className="text-sm md:text-base text-gray-300">
                <a className="text-white font-medium" href="home">Home</a> / Training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helping Hands Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold mb-4">Helping Hands</h2>
            <p className="text-gray-600 text-base tracking-wider">
              We have capability to train even novice students... helping hands for adamant students.
            </p>
          </div>
          <div className="md:w-100 w-full">
            <Image
              src="/home image/service.png"
              alt="Vision"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-12 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">What will you</h2>
          <h3 className="text-6xl font-bold mb-10 text-amber-900">Learn</h3>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {[
              {
                image: '/training image/Training1.jpg',
                title: 'Learn HTML, CSS, JAVASCRIPT, BOOTSTRAP, WORDPRESS',
                duration: '45 Days to Complete.'
              },
              {
                image: '/training image/Training2.jpg',
                title: 'Learn MYSQL, CORE PHP , OPS, LARAVEL',
                duration: '60 Days to Complete'
              },
              {
                image: '/training image/Training3.jpg',
                title: 'Javescript, Angular, React Js, Node Js...',
                duration: '90 Days to Complete.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white transform transition duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-green-600">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-12 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Internship</h2>
          <h3 className="text-6xl font-bold mb-10 text-amber-900">Experience</h3>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {[
              {
                image: '/training image/Traning4.png',
                title: '100% Practical Training',
                desc: "We don't use paper and pencil at all in our training sessions."
              },
              {
                image: '/training image/Traning5.png',
                title: 'Live Projects',
                desc: 'We make you work on Live projects, in order to strengthen your portfolio.'
              },
              {
                image: '/training image/Traning6.png',
                title: 'Innovative Ideas',
                desc: 'We always inbuilt innovation in our training sessions, to learn something new.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-white transition duration-500 text-center p-6"
              >
                <div className="flex justify-center items-center overflow-hidden">
                  <div className="transition-transform duration-500 hover:scale-110 w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="w-full h-42 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-cyan-900">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Training
