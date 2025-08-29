import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function StrukturPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Struktur Organisasi PPID"
        description="Struktur organisasi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Struktur Organisasi PPID"]}
      />
      <Footer />
    </div>
  );
}
