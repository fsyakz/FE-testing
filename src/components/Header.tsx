"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { 
      name: "Beranda", 
      href: "/",
      isDropdown: false
    },
    {
      name: "Profil",
      href: "/profil",
      isDropdown: true,
      subItems: [
        { name: "Visi & Misi", href: "/profil/visi-misi" },
        { name: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
        { name: "Tugas Pokok & Fungsi", href: "/profil/tupoksi" },
        { name: "Data Pegawai", href: "/profil/data-pegawai" }
      ]
    },
    {
      name: "Informasi",
      href: "/informasi",
      isDropdown: true,
      subItems: [
        { name: "Layanan", href: "/layanan" },
        { name: "Pengumuman", href: "/pengumuman" },
        { name: "Agenda", href: "/agenda" },
        { name: "Bank Data", href: "/bank-data" }
      ]
    },
    {
      name: "Interaksi",
      href: "/interaksi",
      isDropdown: true,
      subItems: [
        { name: "Survei", href: "/interaksi/survei" },
        { name: "Masukan & Saran", href: "/interaksi/saran" },
        { name: "Buku Tamu", href: "/interaksi/buku-tamu" }
      ]
    },
    {
      name: "Galeri",
      href: "/galeri",
      isDropdown: true,
      subItems: [
        { name: "Foto", href: "/galeri/foto" },
        { name: "Video", href: "/galeri/video" }
      ]
    },
    { 
      name: "Berita", 
      href: "/berita",
      isDropdown: false
    },
    {
      name: "Informasi Publik",
      href: "/informasi-publik",
      isDropdown: true,
      subItems: [
        { name: "Daftar Informasi Publik", href: "/informasi-publik/daftar" },
        { name: "Klasifikasi Informasi Publik", href: "/informasi-publik/klasifikasi" },
        { name: "Informasi Secara Berkala", href: "/informasi-publik/berkala" },
        { name: "Informasi Serta Merta", href: "/informasi-publik/serta-merta" },
        { name: "Informasi Dikecualikan", href: "/informasi-publik/dikecualikan" },
        { name: "Formulir Informasi Publik", href: "/informasi-publik/formulir" }
      ]
    },
    {
      name: "PPID",
      href: "/ppid",
      isDropdown: true,
      subItems: [
        { name: "Profil PPID", href: "/ppid/profil" },
        { name: "Sekilas PPID", href: "/ppid/sekilas" },
        { name: "Tugas Pokok dan Fungsi PPID", href: "/ppid/tupoksi" },
        { name: "Maklumat Pelayanan Informasi", href: "/ppid/maklumat" },
        { name: "Struktur Organisasi PPID", href: "/ppid/struktur" },
        { name: "Laporan Tahunan PPID", href: "/ppid/laporan" },
        { name: "Visi dan Misi PPID", href: "/ppid/visi-misi" },
        { name: "Standar Layanan", href: "/ppid/standar" },
        { name: "Penghargaan PPID", href: "/ppid/penghargaan" },
        { name: "Kontak Layanan PPID", href: "/ppid/kontak" }
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm md:static sticky top-0 z-50 md:z-auto">
      {/* Top section with logo and search */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">DINAS PANGAN</h1>
              <p className="text-sm text-gray-600">PROVINSI SULAWESI TENGAH</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Masukan kata kunci..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-md rounded-l-none text-white">
                🔍
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
            </div>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex flex-wrap justify-start gap-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.isDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600 focus:outline-none transition-colors",
                          activeDropdown === item.name && "bg-gray-100 text-blue-600"
                        )}
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={cn(
                            "ml-1 h-3 w-3 transition-transform duration-200",
                            activeDropdown === item.name && "rotate-180"
                          )}
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 z-50 w-[280px] bg-white border border-gray-200 shadow-lg rounded-md mt-0 overflow-hidden">
                          <div className="py-1">
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600 focus:outline-none transition-colors"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-2`}>
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.isDropdown ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-gray-700">
                        {item.name}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* DPP SULTENG section with social media - Only visible on mobile */}
      <div className="bg-white border-t md:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">DPP SULTENG</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                aria-label="Twitter"
              >
                t
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
