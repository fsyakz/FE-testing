import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Visi & Misi"
        description="Visi dan Misi Dinas Pangan Provinsi Sulawesi Tengah dalam mewujudkan ketahanan pangan yang berkelanjutan."
        breadcrumb={["Profil", "Visi & Misi"]}
      />
      <Footer />
    </div>
  );
}
