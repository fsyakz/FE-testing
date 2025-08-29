import Header from "@/components/Header";
import EnhancedBanner from "@/components/EnhancedBanner";
import PricingSection from "@/components/PricingSection";
import InstitutionServices from "@/components/InstitutionServices";
import NewsSection from "@/components/NewsSection";
import ContentTabs from "@/components/ContentTabs";
import EnhancedPolling from "@/components/EnhancedPolling";
import Infographics from "@/components/Infographics";
import ExternalLinks from "@/components/ExternalLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with enhanced navigation */}
      <Header />
      
      {/* Enhanced banner/slider section */}
      <EnhancedBanner />
      
      {/* Food pricing ticker */}
      <PricingSection />
      
      {/* Main Content Layout - Responsive and fits viewport */}
      <div className="container mx-auto px-4 py-8 max-w-full">
        {/* Berita Utama Frame - Responsive */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 w-full">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Berita Utama</h2>
          <div className="overflow-hidden">
            <NewsSection />
          </div>
        </div>
        
        {/* Grid Layout for Informasi Instansi and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full mb-6">
          {/* Informasi Instansi - Left/Center */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 h-full">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Informasi Instansi</h2>
              <InstitutionServices />
            </div>
          </div>
          
          {/* Sidebar Components - Right */}
          <div className="space-y-4">
            {/* Jejak Pendapat */}
            <div className="bg-white rounded-lg shadow-md p-3">
              <h3 className="text-xs font-semibold mb-2 text-gray-800">Jejak Pendapat</h3>
              <div className="overflow-hidden">
                <EnhancedPolling />
              </div>
            </div>
            
            {/* Video Section - Proportional size */}
            <div className="bg-white rounded-lg shadow-md p-3">
              <h3 className="text-xs font-semibold mb-2 text-gray-800">Video</h3>
              <div className="aspect-video mb-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Dinas Pangan"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-xs text-gray-600">Video kegiatan dan program Dinas Pangan</p>
            </div>
            
            {/* Infografis */}
            <div className="bg-white rounded-lg shadow-md p-3">
              <h3 className="text-xs font-semibold mb-2 text-gray-800">Infografis</h3>
              <div className="mb-3">
                <img 
                  src="https://www.dpp.sultengprov.go.id/public/img/informasi/infografis/1666836591_a7f275b099bba1f337dc.png" 
                  alt="Infografis" 
                  className="w-full h-20 object-cover rounded"
                />
              </div>
              <p className="text-xs text-gray-600">Kumpulan infografis program dan kegiatan Dinas Pangan</p>
            </div>
            
            {/* Kantor Kami */}
            <div className="bg-white rounded-lg shadow-md p-3">
              <h3 className="text-xs font-semibold mb-2 text-gray-800">Kantor Kami</h3>
              <div className="aspect-video mb-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817267894!2d119.8704!3d-0.8917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bec0b0b0b0b0b%3A0x0!2sPalu%2C%20Central%20Sulawesi!5e0!3m2!1sen!2sid!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="text-xs text-gray-600">
                <p className="font-medium">Dinas Pangan Provinsi Sulawesi Tengah</p>
                <p>Jl. Contoh No. 123, Palu</p>
                <p>Telepon: (0451) 123456</p>
                <p>Email: info@dpp.sultengprov.go.id</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Content tabs (Layanan, Pengumuman, Agenda, Bank Data) */}
      <ContentTabs />

      {/* External links carousel */}
      <ExternalLinks />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
