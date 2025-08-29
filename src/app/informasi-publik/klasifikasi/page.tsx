import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function KlasifikasiInformasiPublikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Klasifikasi Informasi Publik"
        description="Klasifikasi dan kategori informasi publik berdasarkan peraturan yang berlaku."
        breadcrumb={["Informasi Publik", "Klasifikasi Informasi Publik"]}
      />
      <Footer />
    </div>
  );
}
