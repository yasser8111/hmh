import React from 'react';
import { Stethoscope, Activity, Baby, Siren } from "lucide-react";
import { Card } from '../components/Card';

const departments = [
  {
    id: 1,
    title: "الباطنية",
    description: "تشخيص وعلاج الأمراض الباطنية المعقدة والمزمنة بإشراف نخبة من الاستشاريين.",
    icon: Stethoscope,
    themeColor: "blue-600",
  },
  {
    id: 2,
    title: "الجراحة العامة",
    description: "غرف عمليات مجهزة بأحدث التقنيات لإجراء العمليات الجراحية الدقيقة والتقليدية.",
    icon: Activity,
    themeColor: "emerald-600",
  },
  {
    id: 3,
    title: "طب الأطفال",
    description: "رعاية صحية متكاملة للأطفال وحديثي الولادة في بيئة آمنة ومريحة.",
    icon: Baby,
    themeColor: "amber-600",
  },
  {
    id: 4,
    title: "الطوارئ والحوادث",
    description: "قسم طوارئ يعمل على مدار الساعة لاستقبال كافة الحالات الحرجة والحوادث.",
    icon: Siren,
    themeColor: "rose-600",
  },
];

export default function Sections() {
  return (
    <section
      className="w-full bg-slate-50 py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden scroll-mt-28"
      dir="rtl"
      id="sections"
      aria-label="الأقسام الطبية في مستشفى حضرموت الحديث"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-18">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary">
          الأقسام الطبية
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold max-w-3xl mx-auto">
          يضم مستشفى حضرموت الحديث مجموعة متكاملة من الأقسام الطبية المتخصصة،
          مجهزة بأحدث المعدات الطبية العالمية لضمان تقديم أفضل رعاية ممكنة.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {departments.map((dept) => (
          <Card key={dept.id} item={dept} />
        ))}
      </div>
    </section>
  );
}