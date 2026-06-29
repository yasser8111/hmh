import Button from "../components/Button";
import Counter from "../components/Counter";
import {
  Calendar,
  PhoneCall,
  Activity,
  Clock,
  Layers,
  Users,
} from "lucide-react";

const stats = [
  { id: 1, prefix: "+", value: 500, suffix: "", label: "طبيب واستشاري" },
  { id: 2, prefix: "+", value: 20, suffix: "", label: "قسم متخصص" },
  { id: 3, prefix: "", value: 24, suffix: "/7", label: "خدمة طوارئ" },
  { id: 4, prefix: "+", value: 10000, suffix: "", label: "مريض سنوياً" },
];

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero.png"
          alt="image_e84b81.jpg"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-right flex flex-col space-y-6 my-auto px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-secondary leading-tight">
          نـــــرعــــاكــــم
          <br />
          <span className="text-brand-primary">بـــــاهتمـــــام</span>
        </h1>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
          نقدم خدمات طبية متكاملة بأعلى معايير الجودة، كادر طبي بتخصصات دقيقة
          وخبرة متقدمة لخدمة المجتمع، نجمع بين الخبرة العريقة وأحدث تقنيات
          العلاج والأجهزة الطبية.
        </p>

        <div className="flex flex-wrap gap-4 pt-4 justify-start">
          <Button variant="success" size="lg" className="rounded-xl font-bold">
            <Calendar className="w-5 h-5 stroke-[2.5] ml-3" />
            <span>احجز موعدك</span>
          </Button>

          <Button variant="primary" size="lg" className="rounded-xl font-bold">
            <PhoneCall className="w-5 h-5 stroke-[2.5] ml-3" />
            <span>اتصل بالطوارئ</span>
          </Button>
        </div>
      </div>

      <div className="relative z-10 w-full pb-6 md:pb-12 pt-16 px-6 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gradient-to-t from-background to-transparent">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center space-y-2 "
          >
            <div
              className="flex items-center justify-center font-black text-brand-primary"
              dir="ltr"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl">
                {stat.prefix}
              </span>
              <Counter
                value={stat.value}
                fontSize={48}
                textColor="currentColor"
                gradientFrom="transparent"
                gradientTo="transparent"
                gap={2}
              />
              <span className="text-4xl md:text-5xl lg:text-6xl">
                {stat.suffix}
              </span>
            </div>
            <span className="text-base md:text-lg font-extrabold text-gray-800">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
