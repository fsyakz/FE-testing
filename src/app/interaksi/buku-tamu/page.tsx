import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function BukuTamuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Buku Tamu"
        description="Silakan isi buku tamu digital untuk memberikan kesan dan pesan Anda kepada Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Interaksi", "Buku Tamu"]}
      />
      <Footer />
    </div>
  );
}
