import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function SekilasPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Sekilas PPID"
        description="Sekilas tentang Pejabat Pengelola Informasi dan Dokumentasi (PPID) dan perannya dalam keterbukaan informasi publik."
        breadcrumb={["PPID", "Sekilas PPID"]}
      />
      <Footer />
    </div>
  );
}
