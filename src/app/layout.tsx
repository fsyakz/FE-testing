import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dinas Pangan Provinsi Sulawesi Tengah",
  description: "Website resmi Dinas Pangan Provinsi Sulawesi Tengah - Informasi layanan, berita, dan program pangan terkini",
  keywords: "dinas pangan, sulawesi tengah, palu, pangan, pertanian, ketahanan pangan",
  authors: [{ name: "Dinas Pangan Provinsi Sulawesi Tengah" }],
  creator: "Dinas Pangan Provinsi Sulawesi Tengah",
  publisher: "Dinas Pangan Provinsi Sulawesi Tengah",
  robots: "index, follow",
  openGraph: {
    title: "Dinas Pangan Provinsi Sulawesi Tengah",
    description: "Website resmi Dinas Pangan Provinsi Sulawesi Tengah",
    type: "website",
    locale: "id_ID",
    siteName: "DPP Sulteng",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinas Pangan Provinsi Sulawesi Tengah",
    description: "Website resmi Dinas Pangan Provinsi Sulawesi Tengah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
