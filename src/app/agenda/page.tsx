import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PagePlaceholder
        title="Agenda"
        description="Agenda kegiatan dan acara yang diselenggarakan oleh Dinas Pangan Provinsi Sulawesi Tengah."
        breadcrumb={["Agenda"]}
      />
      <Footer />
    </div>
  );
}
