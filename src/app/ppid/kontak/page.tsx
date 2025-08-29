import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function KontakLayananPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Kontak Layanan PPID"
        description="Informasi kontak dan cara menghubungi PPID Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Kontak Layanan PPID"]}
      />
      <Footer />
    </div>
  );
}
