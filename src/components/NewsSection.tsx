"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/data/sampleData";

const NewsSection = () => {
  // Get the latest 6 news articles
  const latestNews = newsArticles.slice(0, 6);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Berita Terbaru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi terkini dan berita terbaru dari Dinas Pangan Provinsi Sulawesi Tengah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestNews.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link href={`/berita/${article.slug}`}>
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">
                  <div className="flex items-center justify-between">
                    <span>{article.date}</span>
                    <span>{article.views} views</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {article.operator}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/berita/${article.slug}`}>
                      Baca Selengkapnya
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/berita">
              Lihat Semua Berita →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
