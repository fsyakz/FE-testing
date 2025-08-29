import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function DataPegawaiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Data Pegawai"
        description="Data pegawai dan informasi kepegawaian Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Profil", "Data Pegawai"]}
      />
      <Footer />
    </div>
  );
}
