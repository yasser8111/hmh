export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "مستشفى حضرموت الحديث",
    alternateName: "Hadramout Modern Hospital",
    description:
      "مستشفى حضرموت الحديث - الصرح الطبي الرائد في المنطقة. نقدم خدمات طبية متكاملة بأعلى معايير الجودة مع كادر طبي متخصص يضم أكثر من 500 طبيب واستشاري.",
    image: "/logo.png",
    logo: "/logo.png",
    medicalSpecialty: [
      "الباطنية",
      "الجراحة العامة",
      "طب الأطفال",
      "الطوارئ والحوادث",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "خدمة طوارئ على مدار الساعة",
      },
      {
        "@type": "MedicalProcedure",
        name: "حجز مواعيد طبية",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 500,
      unitText: "طبيب واستشاري",
    },
    department: [
      {
        "@type": "MedicalClinic",
        name: "قسم الباطنية",
        description:
          "تشخيص وعلاج الأمراض الباطنية المعقدة والمزمنة بإشراف نخبة من الاستشاريين.",
      },
      {
        "@type": "MedicalClinic",
        name: "قسم الجراحة العامة",
        description:
          "غرف عمليات مجهزة بأحدث التقنيات لإجراء العمليات الجراحية الدقيقة والتقليدية.",
      },
      {
        "@type": "MedicalClinic",
        name: "قسم طب الأطفال",
        description:
          "رعاية صحية متكاملة للأطفال وحديثي الولادة في بيئة آمنة ومريحة.",
      },
      {
        "@type": "MedicalClinic",
        name: "قسم الطوارئ والحوادث",
        description:
          "قسم طوارئ يعمل على مدار الساعة لاستقبال كافة الحالات الحرجة والحوادث.",
      },
    ],
    employee: [
      {
        "@type": "Physician",
        name: "د. أحمد السقاف",
        medicalSpecialty: "استشاري الأمراض الباطنية",
        description: "خبرة تزيد عن 20 عاماً في تشخيص وعلاج الأمراض الباطنية المعقدة.",
      },
      {
        "@type": "Physician",
        name: "د. فاطمة العمودي",
        medicalSpecialty: "استشارية طب الأطفال",
        description: "متخصصة في العناية بحديثي الولادة والأطفال الخدج.",
      },
      {
        "@type": "Physician",
        name: "د. خالد باحميد",
        medicalSpecialty: "استشاري الجراحة العامة",
        description:
          "خبير في جراحات المناظير والجهاز الهضمي. أجرى أكثر من 3000 عملية جراحية ناجحة.",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
