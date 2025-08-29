import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function PenghargaanPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Penghargaan PPID"
        description="Penghargaan dan prestasi yang diraih oleh PPID Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Penghargaan PPID"]}
      />
      <Footer />
    </div>
  );
}
