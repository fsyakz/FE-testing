import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function LaporanTahunanPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Laporan Tahunan PPID"
        description="Laporan tahunan kegiatan dan kinerja PPID Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Laporan Tahunan PPID"]}
      />
      <Footer />
    </div>
  );
}
