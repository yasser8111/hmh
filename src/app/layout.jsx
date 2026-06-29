import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
// import Footer from "../components/Footer";
import { Noto_Kufi_Arabic } from "next/font/google";

import "./globals.css";

const notokufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "مستشفى حضرموت الحديث | نرعاكم باهتمام",
  description:
    "مستشفى حضرموت الحديث - الصرح الطبي الرائد في المنطقة. نقدم خدمات طبية متكاملة بأعلى معايير الجودة مع كادر طبي متخصص يضم أكثر من 500 طبيب واستشاري و20 قسم متخصص وخدمة طوارئ 24/7.",
  keywords: [
    "مستشفى حضرموت الحديث",
    "مستشفى",
    "حضرموت",
    "رعاية صحية",
    "طوارئ",
    "أطباء",
    "استشاريين",
    "جراحة",
    "باطنية",
    "أطفال",
    "حجز موعد",
    "اليمن",
  ],
  authors: [{ name: "مستشفى حضرموت الحديث" }],
  creator: "مستشفى حضرموت الحديث",
  publisher: "مستشفى حضرموت الحديث",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_YE",
    siteName: "مستشفى حضرموت الحديث",
    title: "مستشفى حضرموت الحديث | نرعاكم باهتمام",
    description:
      "الصرح الطبي الرائد في حضرموت. خدمات طبية متكاملة بأعلى المعايير العالمية مع أكثر من 500 طبيب واستشاري.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "شعار مستشفى حضرموت الحديث",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مستشفى حضرموت الحديث | نرعاكم باهتمام",
    description:
      "الصرح الطبي الرائد في حضرموت. خدمات طبية متكاملة بأعلى المعايير العالمية.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#276eb9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${notokufi.className} antialiased`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
