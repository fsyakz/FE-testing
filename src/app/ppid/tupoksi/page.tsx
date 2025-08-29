import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function TupoksiPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Tugas Pokok dan Fungsi PPID"
        description="Tugas pokok dan fungsi Pejabat Pengelola Informasi dan Dokumentasi (PPID) dalam mengelola informasi publik."
        breadcrumb={["PPID", "Tugas Pokok dan Fungsi PPID"]}
      />
      <Footer />
    </div>
  );
}
