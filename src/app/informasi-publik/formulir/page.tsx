import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function FormulirInformasiPublikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Formulir Informasi Publik"
        description="Formulir permohonan informasi publik dan tata cara pengajuan permohonan informasi."
        breadcrumb={["Informasi Publik", "Formulir Informasi Publik"]}
      />
      <Footer />
    </div>
  );
}
