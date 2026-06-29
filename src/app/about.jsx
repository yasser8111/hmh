import { Award, HeartPulse, ShieldCheck, Lightbulb } from "lucide-react";

const features = [
  {
    id: 1,
    title: "الجودة",
    description:
      "نلتزم بتقديم أعلى مستويات الجودة في الرعاية الصحية وفق المعايير العالمية.",
    icon: Award,
  },
  {
    id: 2,
    title: "الرعاية",
    description: "نضع المريض في مركز اهتمامنا ونوفر بيئة علاجية آمنة ومريحة.",
    icon: HeartPulse,
  },
  {
    id: 3,
    title: "الأمانة",
    description: "نتعامل بشفافية ومصداقية تامة مع جميع مرضانا وعائلاتهم.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "الابتكار",
    description:
      "نواكب أحدث التطورات التكنولوجية والطبية لتقديم أفضل الحلول العلاجية.",
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <section
      className="w-full bg-background py-20 px-6 md:px-16 lg:px-24"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-brand-primary">
          نبذة عنا
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold">
          تأسس مستشفى حضرموت الحديث ليكون الصرح الطبي الرائد في المنطقة، مكرساً
          جهوده لتقديم رعاية صحية شاملة ومتميزة. نحن نفخر بفريقنا المكون من نخبة
          من الاستشاريين والأطباء، وبأحدث التقنيات الطبية التي تمكننا من التعامل
          مع أدق الحالات وأكثرها تعقيداً.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-2xl p-8 border-2 border-gray-100 flex flex-col items-center text-center space-y-4 shadow-brand-primary/10 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50/60 flex items-center justify-center mb-2">
              <feature.icon className="w-8 h-8 text-brand-primary stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
