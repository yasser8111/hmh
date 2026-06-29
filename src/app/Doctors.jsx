import { Calendar, Award, Clock, ArrowRight } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "د. أحمد السقاف",
    initials: "أ.س",
    specialty: "استشاري الأمراض الباطنية",
    experience: "خبرة تزيد عن 20 عاماً في تشخيص وعلاج الأمراض الباطنية المعقدة.",
    qualification: "حاصل على البورد العربي",
    gradient: "from-blue-500/20 to-indigo-500/10 text-brand-primary",
  },
  {
    id: 2,
    name: "د. فاطمة العمودي",
    initials: "ف.ع",
    specialty: "استشارية طب الأطفال",
    experience: "متخصصة في العناية بحديثي الولادة والأطفال الخدج.",
    qualification: "زميلة الكلية الملكية لطب الأطفال",
    gradient: "from-rose-500/20 to-pink-500/10 text-rose-600",
  },
  {
    id: 3,
    name: "د. خالد باحميد",
    initials: "خ.ب",
    specialty: "استشاري الجراحة العامة",
    experience: "خبير في جراحات المناظير والجهاز الهضمي. أجرى أكثر من 3000 عملية جراحية ناجحة.",
    qualification: "خبير جراحات المناظير الدقيقة",
    gradient: "from-emerald-500/20 to-teal-500/10 text-emerald-600",
  },
];

export default function Doctors() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24" dir="rtl">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary">
          نخبة من الأطباء
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-l from-brand-primary to-brand-secondary mx-auto rounded-full"></div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
          نفخر في مستشفى حضرموت الحديث بضم كادر طبي من ذوي الكفاءة العالية والخبرة الطويلة لضمان تقديم أفضل الخطط العلاجية.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <div 
            key={doc.id} 
            className="group bg-slate-50/50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-brand-primary/20 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center w-full">
              {/* Doctor Avatar Placeholder with Initials */}
              <div className={`w-28 h-28 rounded-full bg-gradient-to-tr ${doc.gradient} flex items-center justify-center text-3xl font-black mb-6 shadow-inner relative group-hover:scale-105 transition-transform duration-300`}>
                <span>{doc.initials}</span>
                <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md">
                  <Award className="w-5 h-5 text-brand-secondary" />
                </div>
              </div>

              {/* Specialty Badge */}
              <span className="bg-brand-primary/5 text-brand-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                {doc.specialty}
              </span>

              {/* Name */}
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {doc.name}
              </h3>

              {/* Experience Info */}
              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
                {doc.experience}
              </p>
            </div>

            <div className="w-full space-y-5">
              {/* Qualification Tag */}
              <div className="flex items-center justify-center gap-2 bg-white border border-slate-100 rounded-2xl py-3 px-4 shadow-sm">
                <Award className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-xs font-extrabold text-slate-700 leading-none">
                  {doc.qualification}
                </span>
              </div>

              {/* Action Button */}
              <button className="w-full py-3.5 bg-brand-primary hover:bg-brand-secondary text-white font-extrabold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                <Calendar className="w-5 h-5" />
                <span>حجز موعد الآن</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
