'use client'
import PlacementPublicSection from '@/component/Placement';
import React from 'react';



const PlacementGallery = () => {
  return (
    <main className='mt-35'>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-center bg-cover flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dow1049t2/image/upload/v1728743695/PN_INFOSYS/unnamed_qzboly.png')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <img
          src="https://res.cloudinary.com/dow1049t2/image/upload/v1729185851/PN_INFOSYS/banner_sqsmgx.jpg"
          alt="Banner Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Placement Gallery</h1>
        </div>
      </section>

      {/* Student Gallery Section */}
      <PlacementPublicSection/>
    </main>
  );
};

export default PlacementGallery;
