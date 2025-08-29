import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Layanan"
        description="Berbagai layanan publik yang disediakan oleh Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Layanan"]}
      />
      <Footer />
    </div>
  );
}
