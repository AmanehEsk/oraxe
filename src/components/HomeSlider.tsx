"use client";

import React, { useState, useEffect } from "react";

interface MediaItem {
  type: "video" | "image";
  url: string;
}

const mediaItems: MediaItem[] = [
  { type: "video", url: "https://galleryoraxe.com/events/poster_blanch_1.mp4" },
  { type: "video", url: "https://galleryoraxe.com/events/poster_red_9.mp4" },
  { type: "video", url: "https://galleryoraxe.com/events/poster_vert_2.mp4" },
];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 10000); // changes every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full group bg-transparent">
      {/* Slides */}
      {mediaItems.map((item, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={item.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            {item.type === "video" ? (
              <video
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={item.url}
                alt={`Poster ${index + 1}`}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        );
      })}

      {/* Subtle overlay gradient to ensure contrast and premium feel */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2.5 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer shadow-lg border border-white/10"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2.5 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer shadow-lg border border-white/10"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={(e) => handleDotClick(index, e)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
