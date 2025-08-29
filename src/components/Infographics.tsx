"use client";

import Image from "next/image";
import { useState } from "react";
import { infographics } from "@/data/sampleData";

const Infographics = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Info Grafis
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {infographics.map((infographic) => (
            <div
              key={infographic.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              onClick={() => openModal(infographic.image)}
            >
              <div className="aspect-square relative">
                <Image
                  src={infographic.image}
                  alt={infographic.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-infographic.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🔍
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
                aria-label="Close modal"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged infographic"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-infographic.jpg";
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Infographics;
