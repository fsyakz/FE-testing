import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function StandarLayananPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Standar Layanan"
        description="Standar layanan informasi publik yang diberikan oleh PPID Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Standar Layanan"]}
      />
      <Footer />
    </div>
  );
}
