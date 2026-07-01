import { Award, HeartPulse, ShieldCheck, Lightbulb } from "lucide-react";
import { Card } from "../../components/ui/Card";

const features = [
  {
    id: 1,
    title: "الجودة",
    description:
      "نلتزم بتقديم أعلى مستويات الجودة في الرعاية الصحية وفق المعايير العالمية.",
    icon: Award,
    themeColor: "blue-600",
  },
  {
    id: 2,
    title: "الرعاية",
    description: "نضع المريض في مركز اهتمامنا ونوفر بيئة علاجية آمنة ومريحة.",
    icon: HeartPulse,
    themeColor: "blue-600",
  },
  {
    id: 3,
    title: "الأمانة",
    description: "نتعامل بشفافية ومصداقية تامة مع جميع مرضانا وعائلاتهم.",
    icon: ShieldCheck,
    themeColor: "blue-600",
  },
  {
    id: 4,
    title: "الابتكار",
    description:
      "نواكب أحدث التطورات التكنولوجية والطبية لتقديم أفضل الحلول العلاجية.",
    icon: Lightbulb,
    themeColor: "blue-600",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="نبذة عن مستشفى حضرموت الحديث"
      className="w-full bg-background py-20 px-6 md:px-16 lg:px-24 scroll-mt-28"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-18">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary">
          نبذة عنا
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold max-w-3xl mx-auto">
          تأسس مستشفى حضرموت الحديث ليكون الصرح الطبي الرائد في المنطقة، مكرساً
          جهوده لتقديم رعاية صحية شاملة ومتميزة. نحن نفخر بفريقنا المكون من نخبة
          من الاستشاريين والأطباء، وبأحدث التقنيات الطبية التي تمكننا من التعامل
          مع أدق الحالات وأكثرها تعقيداً.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <Card key={feature.id} item={feature} bgColor="bg-slate-50" />
        ))}
      </div>
    </section>
  );
}
