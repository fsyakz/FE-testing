import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function DaftarInformasiPublikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Daftar Informasi Publik"
        description="Daftar lengkap informasi publik yang tersedia di Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Informasi Publik", "Daftar Informasi Publik"]}
      />
      <Footer />
    </div>
  );
}
