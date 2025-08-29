import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function StrukturOrganisasiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Struktur Organisasi"
        description="Struktur organisasi dan susunan kepemimpinan Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Profil", "Struktur Organisasi"]}
      />
      <Footer />
    </div>
  );
}
