"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      role="banner"
    >
      <div
        className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out rounded-2xl px-6 transform ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg scale-98 translate-y-4"
            : "bg-transparent shadow-none scale-100 translate-y-6"
        }`}
      >
        <div className="flex-1 flex items-center justify-start">
          <img
            src="/logo.png"
            alt="Hadramout Modern Hospital Logo"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 shrink-0" aria-label="التنقل الرئيسي">
          <a
            href="#hero"
            className="hover:text-brand-primary transition-colors text-gray-900"
          >
            الرئيسية
          </a>
          <a
            href="#about"
            className="hover:text-brand-primary transition-colors"
          >
            نبذة عنا
          </a>
          <a
            href="#sections"
            className="hover:text-brand-primary transition-colors"
          >
            الأقسام
          </a>
          <a
            href="#doctors"
            className="hover:text-brand-primary transition-colors"
          >
            الأطباء
          </a>
          <a href="#" className="hover:text-brand-primary transition-colors">
            تواصل معنا
          </a>
        </nav>

        {/* Menu button for mobile */}
        <div className="flex-1 flex items-center justify-end md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-brand-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Book Now button for desktop */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <Button
            variant="success"
            size="md"
            className="rounded-full font-bold px-6 h-10 text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            احجز موعدك
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-x-0 top-[110px] mx-6 z-40 bg-white/95 backdrop-blur-lg flex flex-col p-8 space-y-6 md:hidden rounded-3xl border border-gray-100 shadow-2xl transition-all duration-300 ease-out origin-top ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-5 text-lg font-bold text-gray-800 text-right" aria-label="قائمة التنقل للهاتف">
          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
          >
            الرئيسية
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
          >
            نبذة عنا
          </a>
          <a
            href="#sections"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
          >
            الأقسام
          </a>
          <a
            href="#doctors"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
          >
            الأطباء
          </a>
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
          >
            تواصل معنا
          </a>
        </nav>

        <div className="pt-4">
          <Button
            variant="success"
            size="lg"
            className="w-full rounded-2xl font-bold py-4 text-base shadow-lg shadow-brand-success/20"
            onClick={() => setIsMenuOpen(false)}
          >
            احجز موعدك
          </Button>
        </div>
      </div>
    </header>
  );
}