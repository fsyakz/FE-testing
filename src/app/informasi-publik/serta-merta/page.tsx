import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function InformasiSertaMertaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Informasi Serta Merta"
        description="Informasi yang wajib diumumkan serta merta oleh Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Informasi Publik", "Informasi Serta Merta"]}
      />
      <Footer />
    </div>
  );
}
