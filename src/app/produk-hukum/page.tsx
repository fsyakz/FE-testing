import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function ProdukHukumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Produk Hukum"
        description="Peraturan perundang-undangan dan produk hukum yang berkaitan dengan bidang pangan."
        breadcrumb={["Produk Hukum"]}
      />
      <Footer />
    </div>
  );
}
