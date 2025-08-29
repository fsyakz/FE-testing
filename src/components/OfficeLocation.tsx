"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OfficeLocation = () => {
  // Coordinates for Palu, Central Sulawesi (replace with actual office coordinates)
  const officeInfo = {
    name: "Dinas Pangan Provinsi Sulawesi Tengah",
    address: "Jl. Trans Sulawesi, Palu, Sulawesi Tengah 94111",
    phone: "(0451) 123456",
    email: "info@dpp.sultengprov.go.id",
    workingHours: "Senin - Jumat: 08:00 - 16:00 WITA",
    // Google Maps embed URL (replace with actual coordinates)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817267756!2d119.8707!3d-0.8917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTMnMzAuMSJTIDExOcKwNTInMTQuNSJF!5e0!3m2!1sen!2sid!4v1234567890"
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Kantor Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kunjungi kantor Dinas Pangan Provinsi Sulawesi Tengah untuk informasi dan layanan lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Lokasi Kantor</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gray-200">
                <iframe
                  src={officeInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Dinas Pangan Provinsi Sulawesi Tengah"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Alamat</h3>
                    <p className="text-gray-600">{officeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telepon</h3>
                    <p className="text-gray-600">{officeInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 text-sm">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">{officeInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                    <p className="text-gray-600">{officeInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Layanan Tersedia</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Konsultasi Ketahanan Pangan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Informasi Harga Pangan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Pengaduan Masyarakat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Perizinan dan Sertifikasi</span>
                  </li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1" asChild>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Petunjuk Arah
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`tel:${officeInfo.phone}`}>
                    Hubungi Kami
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
