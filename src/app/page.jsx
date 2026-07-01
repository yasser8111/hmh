import Hero from "./homepage/Hero";
import About from "./homepage/About";
import Sections from "./homepage/Sections";
import Doctors from "./homepage/Doctors";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "مستشفى حضرموت الحديث | الرئيسية - نرعاكم باهتمام",
  description: "مستشفى حضرموت الحديث - الصرح الطبي الرائد في حضرموت واليمن. أكثر من 500 طبيب واستشاري، 20 قسم متخصص، وخدمة طوارئ على مدار الساعة. احجز موعدك الآن.",
  keywords: [
    "مستشفى حضرموت الحديث",
    "مستشفيات حضرموت",
    "مستشفيات المكلا",
    "أفضل مستشفى في اليمن",
    "حجز موعد طبي المكلا",
    "طوارئ 24 ساعة حضرموت"
  ],
  alternates: {
    canonical: "https://hadramouthospital.com",
  },
  openGraph: {
    title: "مستشفى حضرموت الحديث | الرئيسية - نرعاكم باهتمام",
    description: "مستشفى حضرموت الحديث - الصرح الطبي الرائد في حضرموت واليمن. أكثر من 500 طبيب واستشاري، 20 قسم متخصص، وخدمة طوارئ على مدار الساعة. احجز موعدك الآن.",
    url: "https://hadramouthospital.com",
    siteName: "مستشفى حضرموت الحديث",
    images: [
      {
        url: "/logo-2.svg",
        width: 1200,
        height: 630,
        alt: "مستشفى حضرموت الحديث",
      },
    ],
    locale: "ar_YE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مستشفى حضرموت الحديث | الرئيسية - نرعاكم باهتمام",
    description: "مستشفى حضرموت الحديث - الصرح الطبي الرائد في حضرموت واليمن. أكثر من 500 طبيب واستشاري، 20 قسم متخصص، وخدمة طوارئ على مدار الساعة. احجز موعدك الآن.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <Hero />
      <About />
      <Sections />
      <Doctors />
    </div>
  );
}
