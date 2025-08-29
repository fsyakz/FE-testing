import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GaleriVideoPage() {
  const videos = [
    {
      id: 1,
      title: "Program Sosialisasi Ketahanan Pangan",
      description: "Program sosialisasi ketahanan pangan untuk masyarakat Sulawesi Tengah",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Gerakan Pangan Murah",
      description: "Dokumentasi kegiatan gerakan pangan murah di berbagai daerah",
      embedId: "jNQXAC9IVRw"
    },
    {
      id: 3,
      title: "Kegiatan Dinas Pangan",
      description: "Dokumentasi berbagai kegiatan Dinas Pangan Provinsi Sulawesi Tengah",
      embedId: "ScMzIvxBSi4"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-blue-600">Beranda</a>
            <span className="mx-2">/</span>
            <a href="/galeri" className="hover:text-blue-600">Galeri</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Video</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Galeri Video</h1>
          <p className="text-gray-600">Kumpulan video kegiatan dan program Dinas Pangan Provinsi Sulawesi Tengah.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
