import React from 'react';
import { ArrowLeft } from 'lucide-react';

const themeStyles = {
  "blue-600": {
    bg: "bg-blue-600/10",
    text: "text-blue-600",
    shadow: "hover:shadow-blue-600/10",
    groupText: "group-hover:text-blue-600",
  },
  "emerald-600": {
    bg: "bg-emerald-600/10",
    text: "text-emerald-600",
    shadow: "hover:shadow-emerald-600/10",
    groupText: "group-hover:text-emerald-600",
  },
  "amber-600": {
    bg: "bg-amber-600/10",
    text: "text-amber-600",
    shadow: "hover:shadow-amber-600/10",
    groupText: "group-hover:text-amber-600",
  },
  "rose-600": {
    bg: "bg-rose-600/10",
    text: "text-rose-600",
    shadow: "hover:shadow-rose-600/10",
    groupText: "group-hover:text-rose-600",
  }
};

export const Card = ({ item, bgColor = 'bg-white' }) => {
  const IconComponent = item.icon;
  const styles = themeStyles[item.themeColor] || themeStyles["blue-600"];

  return (
    <div
      className={`group ${bgColor} rounded-3xl p-8 border-2 border-transparent flex flex-col justify-between items-start text-right transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.shadow}`}
    >
      <div className="w-full">
        <div
          className={`w-14 h-14 rounded-2xl ${styles.bg} ${styles.text} flex items-center justify-center mb-6`}
        >
          {IconComponent && <IconComponent className="w-7 h-7 stroke-2" />}
        </div>

        <h3 className={`text-xl font-bold text-gray-900 mb-3 ${styles.groupText} transition-colors duration-200`}>
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">
          {item.description}
        </p>
      </div>

      <div className={`flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:underline ${styles.groupText}`}>
        <span>استكشف المزيد</span>
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
      </div>
    </div>
  );
};