import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function MaklumatPelayananPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Maklumat Pelayanan Informasi"
        description="Maklumat pelayanan informasi publik yang diberikan oleh PPID Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["PPID", "Maklumat Pelayanan Informasi"]}
      />
      <Footer />
    </div>
  );
}
