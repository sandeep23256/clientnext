'use client'

import React from 'react';

const Service = () => {
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
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <img
              src="https://res.cloudinary.com/dow1049t2/image/upload/v1728743507/PN_INFOSYS/page-heading-bg_i9miyf.png"
              alt="Foreground"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 space-y-4 px-4">
              <h1 className="text-4xl md:text-5xl font-bold">Our services</h1>
              <p className="text-sm md:text-base text-gray-300">
                <a className="text-white font-medium" href="home">
                  Home
                </a>
                /Our Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <h2 className="text-lg font-normal text-center mb-10">
            "PN INFOSYS is a leading global business consulting and IT service company. We provide a full range of maintenance and compliance services for Government and Commercial facilities both large and small..."
          </h2>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-xl overflow-hidden shadow-lg bg-white text-black transition duration-500 text-center p-6 ">
                <div className="flex justify-center items-center overflow-hidden">
                  <div className="transition-transform duration-500 hover:scale-110 w-1/2">
                    <img
                      src={`/about image/Service${n}.jpg`}
                      alt={`Service ${n}`}
                      className="w-full h-42 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    {n === 1 ? 'Innovative Ideas' : n === 2 ? 'Creative Designing' : "Client's Happiness"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section>
        <div className="bg-[#009df2] w-full px-0 sm:px-4 md:px-5 py-10 md:py-30 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-3xl md:text-6xl text-center md:text-left font-bold">
                PN Services
              </h1>
              <h1 className="text-lg sm:text-lg md:text-xl text-center md:text-left font-bold md:px-4">
                PN INFOSYS provides the best service possible to its customers because for us, our client’s happiness is important.
              </h1>

              <div className="space-y-6">
                {[
                  'PN INFOSYS Company provides a full range of maintenance and compliance services for Government and Commercial facilities both large and small.',
                  'PN INFOSYS believes in developing true partnerships. We foster a collegial environment where individual perspectives are respected and honest dialogue is expected.',
                  'PN INFOSYS brings robust skills and forward looking perspectives to solve customer challenges.',
                  'PN INFOSYS is driven to meet client needs with determination and grit. We embrace tough challenges and do not rest until the problem is solved, the right way.',
                ].map((desc, index) => (
                  <div key={index} className="flex items-start gap-4 md:px-10 sm:px-0 px-5">
                    <p className="text-sm sm:text-base">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/about image/Service4.png"
                alt="Service"
                className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[500px] animate-float animate-[bounce_8s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
