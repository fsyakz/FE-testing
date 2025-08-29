import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function ProfilPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Profil PPID"
        description="Profil Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Profil"]}
      />
      <Footer />
    </div>
  );
}
