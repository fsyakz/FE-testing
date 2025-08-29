import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function TransparansiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Transparansi"
        description="Informasi transparansi dan akuntabilitas publik Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Transparansi"]}
      />
      <Footer />
    </div>
  );
}
