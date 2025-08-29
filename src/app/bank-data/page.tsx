import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function BankDataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Bank Data"
        description="Kumpulan data dan informasi publik yang dapat diakses oleh masyarakat."
        breadcrumb={["Bank Data"]}
      />
      <Footer />
    </div>
  );
}
