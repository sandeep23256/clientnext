'use client'
import React from 'react';
import Image from 'next/image';

const PlacementDesk = () => {
  const steps = [
    { id: "01", title: "First Step.", dis: "Come to us...!!" },
    { id: "02", title: "Second Step.", dis: "Learn with us...!!" },
    { id: "03", title: "Third Step.", dis: "Be a JOB SEEKER...!!" },
  ];

  return (
    <main className='mt-35'>
      {/* Banner Section */}
      <section>
        <div className="relative">
          <div
            className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dow1049t2/image/upload/v1728743695/PN_INFOSYS/unnamed_qzboly.png')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <img
              src="https://res.cloudinary.com/dow1049t2/image/upload/v1729185851/PN_INFOSYS/banner_sqsmgx.jpg"
              alt="Foreground"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
        </div>
      </section>

      {/* Step Cards Section */}
      <section className='bg-white text-black'>
        <div className="bg-gradient-to-b from-blue-100 to-white py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Welcome to our Placement Cell
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-blue-700 mt-1">
              We are here for your bright future.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-20 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative group">
                <div className="bg-white p-6 rounded-lg w-64 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-blue-600 text-white font-bold w-10 h-10 mx-auto rounded-md flex items-center justify-center mb-3">
                    {step.id}
                  </div>
                  <h1 className="text-gray-800 font-medium text-xl mb-1">{step.title}</h1>
                  <p className="text-gray-800 font-light">{step.dis}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-[-35px] top-1/2 transform -translate-y-1/2 text-blue-500 text-3xl">
                    ➜
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className='bg-white text-black'>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-28 lg:px-40 gap-10">
          <div className="w-full md:w-2/5">
            <Image
              src="https://res.cloudinary.com/dow1049t2/image/upload/v1728759640/PN_INFOSYS/vj1_wzrqg1.png"
              alt="Chairman"
              width={500}
              height={500}
              className="rounded-xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-orange-500 mb-2">Message From</h2>
            <h4 className="text-xl font-semibold text-gray-600 mb-6">Chairman's Desk</h4>
            <p className="text-gray-700 leading-relaxed text-justify">
              Established in the year 2018, PN Infosys is a rapidly growing software company in Gwalior.
              Our company is not only a training center but also a product-based company. PN Infosys,
              which was once a dream, has now become a reality and a much sought-after institution in and around Gwalior.
              <br /><br />
              It gives me great pleasure to inform you that the 2018–2019 batch has been fully placed.
              All students are now working in high-paying companies in Delhi, Indore, and Bhopal.
              I am happy to have the opportunity to serve in such a magnificent capacity and
              look forward to helping pave the way for a bright and successful future.
            </p>
          </div>
        </div>

        {/* CEO Message */}
        <div className="py-10 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-28 lg:px-40 gap-10">
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-orange-500 mb-2">Message From</h2>
            <h4 className="text-xl font-semibold text-gray-600 mb-6">CEO Desk</h4>
            <p className="text-gray-700 leading-relaxed text-justify">
              “When educating the minds of our youth, we must not forget to educate their hearts.”
              We focus on discovering, developing, and drawing out the hidden talent and potential inside all our students.
              Our future goal is clear.
              <br /><br />
              We aim to provide top-quality training over the next 5 years.
              In today’s dynamic world, 360-degree development and grooming are of supreme importance.
              Through our company, we are creating an environment for future leaders, entrepreneurs, and professionals
              with skills and aptitude in a wide range of disciplines.
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <Image
              src="https://res.cloudinary.com/dow1049t2/image/upload/v1728759639/PN_INFOSYS/neha_1_fkzh0y.jpg"
              alt="CEO"
              width={500}
              height={500}
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className='bg-white text-black py-12'>
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">What Our Students Say</h1>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-700">Vinod Chauhan</h2>
            <h3 className="text-md text-blue-500 mb-4">Full Stack Developer</h3>
            <p className="text-gray-600 leading-relaxed">
              Excellent teaching staff, hands-on experience on the latest technologies.
              80% practical, 20% theory, which is a great balance. The projects were challenging
              but rewarding, and I now feel confident tackling any full stack job thanks to the
              knowledge gained here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlacementDesk;
