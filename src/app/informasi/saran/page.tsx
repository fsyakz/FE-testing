import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function SaranPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Masukan & Saran"
        description="Sampaikan masukan dan saran Anda untuk perbaikan pelayanan Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Informasi", "Masukan & Saran"]}
      />
      <Footer />
    </div>
  );
}
