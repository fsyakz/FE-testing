import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function InfografisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Infografis"
        description="Kumpulan infografis dan visualisasi data terkait bidang pangan dan ketahanan pangan."
        breadcrumb={["Infografis"]}
      />
      <Footer />
    </div>
  );
}
