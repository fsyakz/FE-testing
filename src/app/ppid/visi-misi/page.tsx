import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function VisiMisiPPIDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder 
        title="Visi dan Misi PPID"
        description="Visi dan misi Pejabat Pengelola Informasi dan Dokumentasi (PPID) dalam melayani informasi publik."
        breadcrumb={["PPID", "Visi dan Misi PPID"]}
      />
      <Footer />
    </div>
  );
}
