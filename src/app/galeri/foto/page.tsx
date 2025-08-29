import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function GaleriFotoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Galeri Foto"
        description="Kumpulan foto kegiatan dan dokumentasi Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Galeri", "Foto"]}
      />
      <Footer />
    </div>
  );
}
