import Hero from "./Hero";
import About from "./About";
import Sections from "./Sections";
import Doctors from "./Doctors";

export const metadata = {
  title: "مستشفى حضرموت الحديث | الرئيسية - نرعاكم باهتمام",
  description:
    "مستشفى حضرموت الحديث - الصرح الطبي الرائد في حضرموت واليمن. أكثر من 500 طبيب واستشاري، 20 قسم متخصص، وخدمة طوارئ على مدار الساعة. احجز موعدك الآن.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Sections />
      <Doctors />
    </div>
  );
}
