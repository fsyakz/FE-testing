"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VideoSection = () => {
  // Sample YouTube video IDs - replace with actual video IDs
  const videos = [
    {
      id: 1,
      title: "Sosialisasi Program Ketahanan Pangan",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Program sosialisasi ketahanan pangan untuk masyarakat Sulawesi Tengah"
    },
    {
      id: 2,
      title: "Gerakan Pangan Murah",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Dokumentasi kegiatan gerakan pangan murah di berbagai daerah"
    },
    {
      id: 3,
      title: "Monitoring Harga Pangan",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      description: "Kegiatan monitoring dan pengawasan harga pangan di pasar tradisional"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Video Infografis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tonton video informatif dan dokumentasi kegiatan Dinas Pangan Provinsi Sulawesi Tengah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video bg-gray-900">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {video.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank">
                    Tonton di YouTube
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Video */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">
                Video Unggulan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual featured video ID
                  title="Video Unggulan Dinas Pangan"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Profil Dinas Pangan Provinsi Sulawesi Tengah
                </h3>
                <p className="text-gray-600 mb-4">
                  Video profil lengkap tentang visi, misi, dan program kerja Dinas Pangan Provinsi Sulawesi Tengah
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/galeri/video">
              Lihat Semua Video →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
