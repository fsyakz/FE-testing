import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function TupoksiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Tugas Pokok & Fungsi"
        description="Tugas pokok dan fungsi Dinas Pangan Provinsi Sulawesi Tengah sesuai dengan peraturan yang berlaku."
        breadcrumb={["Profil", "Tugas Pokok & Fungsi"]}
      />
      <Footer />
    </div>
  );
}
