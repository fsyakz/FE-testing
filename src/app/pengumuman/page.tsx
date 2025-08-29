import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function PengumumanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Pengumuman"
        description="Pengumuman resmi dan informasi terkini dari Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Pengumuman"]}
      />
      <Footer />
    </div>
  );
}
