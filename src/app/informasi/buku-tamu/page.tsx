import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function BukuTamuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Buku Tamu"
        description="Buku tamu digital untuk pengunjung dan tamu Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Informasi", "Buku Tamu"]}
      />
      <Footer />
    </div>
  );
}
