"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useGetAllSlidesQuery } from "../../redux/features/slider/sliderApi";


export default function HeroSlider() {
  const { data: slides = [], isLoading, isError } = useGetAllSlidesQuery();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (isLoading) {
    return (
      <div className="h-[250px] sm:h-[450px] md:h-[600px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-sm">Loading slides...</p>
      </div>
    );
  }

  if (isError || slides.length === 0) {
    return (
      <div className="h-[250px] sm:h-[450px] md:h-[600px] flex items-center justify-center bg-red-100">
        <p className="text-red-600 text-sm">Failed to load slides.</p>
      </div>
    );
  }

  const { title, subtitle, image } = slides[index];

  return (
    <div className="relative w-full h-[250px] sm:h-[450px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      {image && (
        <Image
          src={image.url}
          alt={title}
          fill
          className="object-cover object-center transition-all duration-1000"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h4 className="text-xs sm:text-sm text-blue-200 font-semibold tracking-wide uppercase mb-1">
          WHAT ARE YOU WAITING FOR?
        </h4>
        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          {title}
        </h1>
        <p className="text-sm sm:text-lg text-white mt-2 mb-4">{subtitle}</p>

        <Link
          href="/user/apply"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 py-2 rounded-full transition duration-300"
        >
          Apply for Internship
        </Link>
      </div>
    </div>
  );
}