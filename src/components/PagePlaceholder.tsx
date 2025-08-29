import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PagePlaceholderProps {
  title: string;
  description: string;
  breadcrumb?: string[];
}

const PagePlaceholder = ({ title, description, breadcrumb }: PagePlaceholderProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {breadcrumb && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Beranda
                  </Link>
                </li>
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-gray-400">/</span>
                    <span className={index === breadcrumb.length - 1 ? "text-gray-600" : "text-blue-600 hover:text-blue-800"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="text-6xl text-blue-300 mb-4">🚧</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Halaman Dalam Pengembangan
              </h3>
              <p className="text-gray-600 mb-6">
                Halaman ini sedang dalam tahap pengembangan. Konten akan segera tersedia.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Untuk informasi lebih lanjut, silakan hubungi:
                </p>
                <div className="bg-white rounded-lg p-4 border">
                  <p className="font-semibold text-gray-700">Dinas Pangan Provinsi Sulawesi Tengah</p>
                  <p className="text-gray-600">Email: info@dpp.sultengprov.go.id</p>
                  <p className="text-gray-600">Telepon: (0451) 123456</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="/">
                  Kembali ke Beranda
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/informasi/saran">
                  Kirim Saran
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PagePlaceholder;
