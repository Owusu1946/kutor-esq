import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AppLayout } from "@/app/components/layout/AppLayout";
import { SiteJsonLd } from "@/app/components/seo/SiteJsonLd";

const SITE = "https://www.wonderkutor.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Wonder Victor Kutor, Esq. | Lawyer, Author & Public Servant (Ghana)";
const description =
  "Who is Wonder Kutor? Official site of Wonder Victor Kutor, Esq. — Ghanaian barrister and solicitor (Ghana School of Law), author of The Immigration Formulae, and public servant. Biography, milestones, photos, and publications.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  keywords: [
    "Wonder Kutor",
    "Wonder Victor Kutor",
    "who is Wonder Kutor",
    "Wonder Kutor lawyer",
    "Wonder Kutor Ghana",
    "Wonder Victor Kutor Esq",
    "Ghana School of Law",
    "Ghana barrister",
    "Ghana solicitor",
    "The Immigration Formulae",
    "Wonder Kutor author",
    "Ghanaian lawyer",
    "public servant Ghana",
  ],
  authors: [{ name: "Wonder Victor Kutor, Esq.", url: SITE }],
  creator: "Wonder Victor Kutor, Esq.",
  publisher: "Wonder Victor Kutor, Esq.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Wonder Victor Kutor, Esq. | Ghanaian Lawyer, Author & Public Servant",
    description,
    url: SITE,
    siteName: "Wonder Victor Kutor",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/seo/og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt:
          "Wonder Victor Kutor, Esq. — Ghanaian barrister in legal wig and gown (Ghana School of Law).",
        type: "image/jpeg",
      },
      {
        url: "/seo/og-1200x1200.jpg",
        width: 1200,
        height: 1200,
        alt:
          "Wonder Victor Kutor, Esq. — portrait for social previews and square link thumbnails.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonder Victor Kutor, Esq. | Ghanaian Lawyer & Author",
    description:
      "Official website: legal career, Ghana School of Law, publications including The Immigration Formulae, and public service.",
    images: ["/seo/og-1200x630.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  category: "law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#059669"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #059669,0 0 5px #059669"
        />
        <SiteJsonLd />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
