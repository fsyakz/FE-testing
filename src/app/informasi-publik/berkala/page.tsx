import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function InformasiBerkalaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Informasi Secara Berkala"
        description="Informasi yang wajib disediakan dan diumumkan secara berkala oleh Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Informasi Publik", "Informasi Secara Berkala"]}
      />
      <Footer />
    </div>
  );
}
