import { Calendar } from "lucide-react";
import Button from "../components/Button";

const doctors = [
  {
    id: 1,
    name: "د. أحمد السقاف",
    initials: "أ.س",
    specialty: "استشاري الأمراض الباطنية",
    experience:
      "خبرة تزيد عن 20 عاماً في تشخيص وعلاج الأمراض الباطنية المعقدة.",
    qualification: "حاصل على البورد العربي",
    colorClass: "bg-blue-600/10 text-blue-600",
    gradient: "from-blue-500/20 to-indigo-500/10 text-brand-primary",
  },
  {
    id: 2,
    name: "د. فاطمة العمودي",
    initials: "ف.ع",
    specialty: "استشارية طب الأطفال",
    experience: "متخصصة في العناية بحديثي الولادة والأطفال الخدج.",
    qualification: "زميلة الكلية الملكية لطب الأطفال",
    colorClass: "bg-rose-600/10 text-rose-600",
    gradient: "from-rose-500/20 to-pink-500/10 text-rose-600",
  },
  {
    id: 3,
    name: "د. خالد باحميد",
    initials: "خ.ب",
    specialty: "استشاري الجراحة العامة",
    experience:
      "خبير في جراحات المناظير والجهاز الهضمي. أجرى أكثر من 3000 عملية جراحية ناجحة.",
    qualification: "خبير جراحات المناظير الدقيقة",
    colorClass: "bg-emerald-600/10 text-emerald-600",
    gradient: "from-emerald-500/20 to-teal-500/10 text-emerald-600",
  },
];

function DoctorCard({ doc }) {
  return (
    <article
      className={`group bg-slate-50 rounded-3xl p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-600/20`}
    >
      <div className="flex flex-col items-center w-full">
        <div
          className={`w-28 h-28 rounded-full ${doc.colorClass} flex items-center justify-center text-3xl font-black mb-6 shadow-inner`}
          aria-hidden="true"
        >
          <span>{doc.initials}</span>
        </div>

        <span className="bg-brand-primary/5 text-brand-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4">
          {doc.specialty}
        </span>

        <h3 className="text-2xl font-black text-gray-900 mb-4">{doc.name}</h3>

        <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
          {doc.experience}
        </p>
      </div>

      <div className="w-full space-y-5">
        <Button variant="primary" className="w-full rounded-2xl py-3.5 shadow-md flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5 ml-3" />
          <span>حجز موعد الآن</span>
        </Button>
      </div>
    </article>
  );
}

export default function Doctors() {
  return (
    <section 
    className="w-full bg-white py-24 px-6 md:px-16 lg:px-24 scroll-mt-28" 
    dir="rtl" 
    id="doctors"
    aria-label="نخبة من الأطباء والاستشاريين"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-18">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary">
          نخبة من الأطباء
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold max-w-3xl mx-auto">
          نفخر في مستشفى حضرموت الحديث بضم كادر طبي من ذوي الكفاءة العالية
          والخبرة الطويلة لضمان تقديم أفضل الخطط العلاجية.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}
