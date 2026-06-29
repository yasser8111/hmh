import Button from "../components/Button";
import {
  Calendar,
  PhoneCall,
  Activity,
  Clock,
  Layers,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-24 px-6 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero.png"
          alt="image_e84b81.jpg"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-right flex flex-col space-y-6 my-auto">
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

      <div className="relative z-10 w-full bg-brand-secondary/90 backdrop-blur-md rounded-t-3xl p-6 md:p-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white shadow-2xl border-t border-white/10">
        <div className="flex flex-col items-center justify-center space-y-1">
          <Users className="w-6 h-6 text-blue-200 mb-1" />
          <span className="text-2xl md:text-3xl font-black text-blue-100">
            +500
          </span>
          <span className="text-xs md:text-sm font-medium text-blue-200">
            طبيب واستشاري
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Layers className="w-6 h-6 text-blue-200 mb-1" />
          <span className="text-2xl md:text-3xl font-black text-blue-100">
            +20
          </span>
          <span className="text-xs md:text-sm font-medium text-blue-200">
            قسم متخصص
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Clock className="w-6 h-6 text-blue-200 mb-1" />
          <span className="text-2xl md:text-3xl font-black text-blue-100">
            24/7
          </span>
          <span className="text-xs md:text-sm font-medium text-blue-200">
            خدمة طوارئ
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Activity className="w-6 h-6 text-blue-200 mb-1" />
          <span className="text-2xl md:text-3xl font-black text-blue-100">
            +10,000
          </span>
          <span className="text-xs md:text-sm font-medium text-blue-200">
            مريض سنوياً
          </span>
        </div>
      </div>
    </section>
  );
}
