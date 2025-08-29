import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function InformasiDikecualikanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Informasi Dikecualikan"
        description="Informasi yang dikecualikan dari keterbukaan informasi publik sesuai dengan peraturan perundang-undangan."
        breadcrumb={["Informasi Publik", "Informasi Dikecualikan"]}
      />
      <Footer />
    </div>
  );
}
