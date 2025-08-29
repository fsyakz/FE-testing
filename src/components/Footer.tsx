"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold">DINAS PANGAN</h2>
          <p className="text-sm">
            Jalan Moh Yamin No 17 Palu. Kabupaten Kota Palu, Provinsi Sulawesi Tengah
          </p>
          <p className="text-sm">
            No. Telp: (0451) 421044 | E-mail: dispang@sultengprov.go.id
          </p>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-4 py-4">
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors"
              aria-label="Instagram"
            >
              📷
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors"
              aria-label="Twitter"
            >
              t
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors"
              aria-label="YouTube"
            >
              ▶
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white border-opacity-20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
              <Link href="/redaksi" className="hover:text-gray-200 transition-colors">
                Redaksi
              </Link>
              <span>|</span>
              <Link href="/syarat-kondisi" className="hover:text-gray-200 transition-colors">
                Syarat & Kondisi
              </Link>
              <span>|</span>
              <Link href="/peta-situs" className="hover:text-gray-200 transition-colors">
                Peta Situs
              </Link>
            </div>
            
            <div className="text-sm text-center md:text-right">
              <p>© {currentYear} - Dinas Pangan</p>
              <p className="italic">© Dinas Pangan Provinsi Sulawesi Tengah {currentYear}. | Online: 2 Orang</p>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
            aria-label="Back to top"
          >
            <span className="block w-4 h-4 text-center leading-none">↑</span>
            <span className="text-xs block mt-1">TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
