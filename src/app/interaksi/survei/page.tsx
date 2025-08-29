import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function SurveiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Survei"
        description="Survei kepuasan masyarakat terhadap pelayanan Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Interaksi", "Survei"]}
      />
      <Footer />
    </div>
  );
}
