"use client";

import Image from "next/image";
import Link from "next/link";
import { institutionServices } from "@/data/sampleData";

const InstitutionServices = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          INFORMASI INSTANSI
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {institutionServices.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              target={service.link.startsWith('http') ? '_blank' : '_self'}
              rel={service.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 80px, 64px"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-icon.png";
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionServices;
