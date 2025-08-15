'use client'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Technology from '@/component/Technology'
import HeroSlider from '@/component/HeroSlider'
import Portfolio from '@/component/Portfolio'
import EventCards from '@/component/Event'


const Home = () => {
  const cards = [
    {
      image: "/home image/card1.jpg",
      title: "Collaborative Spirit",
      description: "We believe in developing true partnerships and making clients happy."
    },
    {
      image: "/home image/card2.png",
      title: "Expert Thinking",
      description: "We bring robust skill and forward-looking perspectives to solve customer challenges."
    },
    {
      image: "/home image/card3.jpg",
      title: "Expert Thinking",
      description: "We bring robust skill and forward-looking perspectives to solve customer challenges."
    },
    {
      image: "/home image/card4.png",
      title: "Industrial Training",
      description: "We provide free Industrial Internship to novice undergraduates. Our aim is to help students."
    }
  ]

  const Card = ({ image, title, description }) => (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Read More</button>
    </div>
  )

  return (
    <section className="w-full bg-white text-black space-y-10 mt-18">
      {/* Hero Section */}
     <HeroSlider/>

      {/* Info Section */}
      <div className="text-center px-4">
        <h1 className="text-lg md:text-xl font-medium max-w-8xl mx-auto">
          PN INFOSYS is a leading global business consulting and IT service company...
        </h1>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 pb-20">
        {cards.map((card, index) => (
          <div key={index} className="max-w-md w-full p-8 bg-white rounded-2xl shadow-lg text-center group cursor-pointer transition-transform duration-300">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500"></div>
              <img src={card.image} alt="Card" className="relative rounded-full shadow w-32 transition-transform group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-700 mb-4">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Learning Section */}
        <div className='bg-[#009df2] w-full px-0 sm:px-4 md:px-5 py-10 text-white'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>

          {/* Text Section */}
          <div className='md:w-1/2 space-y-6'>
            <h1 className='text-4xl sm:text-3xl md:text-4xl text-center md:text-left font-bold'>
              Learning environment,Free Internship to novice students.
            </h1>
            <div className='space-y-6'>

              {/* Service Cards */}
              {[
                {
                  title: 'WEB DESIGNING',
                  description: 'Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.'
                },
                {
                  title: 'WEB DEVELOPMENT',
                  description: 'Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.'
                },
                {
                  title: 'APP DEVELOPMENT',
                  description: 'Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.'
                },
                {
                  title: 'ANGULAR, PYTHON, DJANGO, LARAVEL',
                  description: 'Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.'
                },
              ].map((service, index) => (
                <div key={index} className='flex items-start gap-4 md:px-10 sm:px-0 px-5'>
                  <FaCheckCircle className='text-white text-2xl mt-1 shrink-0' />
                  <div>
                    <h2 className='text-lg sm:text-xl md:text-lg font-bold mb-2'>{service.title}</h2>
                    <p className='text-sm sm:text-base'>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className='md:w-1/2 flex justify-center'>
            <img
              src='/home image/learning img.png'
              alt="Learning"
              className='pt-30 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] animate-float animate-[bounce_5s_ease-in-out_infinite]'
            />
          </div>
        </div>
      </div>

      {/* Technologies */}
       <Technology/>

      {/* Portfolio */}
      <Portfolio/>
      {/* Service */}
          <div className='bg-[#009df2] w-full px-4 sm:px-4 md:px-16 py-10 text-white'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>

          {/* Text Section */}
          <div className='md:w-1/2 space-y-6'>
            <h1 className='text-4xl sm:text-3xl md:text-4xl text-center md:text-left font-bold'>
              Our Service
            </h1>
            <div className='space-y-6'>

              {/* Service Cards */}
              {[
                {
                  title: 'INNOVATIVE Ideas',
                  desc: 'PN INFOSYS believes in developing true partnerships. We foster a collegial environment where individual perspectives are respected and honest dialogue is expected.',
                },
                {
                  title: 'CREATIVE Designing',
                  desc: 'PN INFOSYS brings robust skills and forward-looking perspectives to solve customer challenges. We use proven knowledge to make recommendations and provide expert guidance to our customers.',
                },
                {
                  title: "CLIENT'S Happiness",
                  desc: 'PN INFOSYS is driven to meet client needs with determination and grit. We embrace tough challenges and do not rest until the problem is solved, the right way.',
                },
                {
                  title: 'FULL Maintenance',
                  desc: 'PN INFOSYS provides a full range of maintenance and compliance services for Government and Commercial facilities both large and small.',
                },
                {
                  title: 'PRACTICAL Training',
                  desc: "We don't use paper and pencil at all in our training sessions. We only provide practical work during training class sessions.",
                }
              ].map((service, index) => (
                <div key={index} className='flex items-start gap-4 md:px-5 sm:px-1 px-1'>
                  <FaCheckCircle className='text-white text-2xl mt-1 shrink-0' />
                  <div>
                    <h2 className='text-lg sm:text-xl md:text-lg font-bold mb-2'>{service.title}</h2>
                    <p className='text-sm sm:text-base'>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className='md:w-1/2 flex justify-center'>
            <img
              src='/home image/service.png'
              alt="Learning"
              className='w-full md:pt-30 max-w-[400px] sm:max-w-[400px] md:max-w-[600px] animate-float animate-[bounce_5s_ease-in-out_infinite]'
            />
          </div>
        </div>
      </div>
      {/* Events */}
    <EventCards/>

    </section>
  )
}

export default Home
