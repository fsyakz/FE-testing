"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { externalLinks } from "@/data/sampleData";

const ExternalLinks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= externalLinks.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? externalLinks.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === externalLinks.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const getVisibleLinks = () => {
    const visibleCount = 3;
    const links = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % externalLinks.length;
      links.push(externalLinks[index]);
    }
    
    return links;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Kantor Kami
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Next"
          >
            ›
          </button>

          {/* Links container */}
          <div className="flex justify-center space-x-6 px-12">
            {getVisibleLinks().map((link, index) => (
              <a
                key={`${link.id}-${currentIndex}-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={link.image}
                      alt={link.name}
                      fill
                      sizes="(max-width: 768px) 100px, 80px"
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder-logo.png";
                      }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {externalLinks.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;
