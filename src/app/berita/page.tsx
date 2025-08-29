import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function BeritaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Berita"
        description="Kumpulan berita terkini dan informasi terbaru dari Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Berita"]}
      />
      <Footer />
    </div>
  );
}
