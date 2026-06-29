"use client";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
  className="w-full fixed top-0 left-0 right-0 z-50 mx-auto px-6 md:px-16 lg:px-24"
  dir="rtl"
>
  <div 
    className={`flex items-center justify-between w-full transition-all duration-500 rounded-2xl px-6 ${
      isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-lg scale-98 mt-4"
        : "bg-transparent shadow-none scale-100 mt-6"
    }`}
  >
    
    <div className="flex-1 flex items-center justify-start">
      <img
        src="/logo.png"
        alt="Hadramout Modern Hospital Logo"
        className="h-14 md:h-24 w-auto object-contain"
      />
    </div>

    <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 shrink-0">
      <a href="#" className="hover:text-brand-primary transition-colors text-gray-900">الرئيسية</a>
      <a href="#" className="hover:text-brand-primary transition-colors">نبذة عنا</a>
      <a href="#" className="hover:text-brand-primary transition-colors">الأقسام</a>
      <a href="#" className="hover:text-brand-primary transition-colors">الأطباء</a>
      <a href="#" className="hover:text-brand-primary transition-colors">تواصل معنا</a>
    </nav>

    <div className="flex-1 flex items-center justify-end">
      <Button
        variant="success"
        size="md"
        className="rounded-full font-bold px-6 h-9 text-sm"
      >
        احجز موعدك
      </Button>
    </div>

  </div>
</header>
  );
}