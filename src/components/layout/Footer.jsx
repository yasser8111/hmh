"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaXTwitter, 
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa6';

const quickLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/about' },
  { name: 'الأطباء', href: '/doctors' },
  { name: 'الأقسام', href: '/departments' },
  { name: 'الخدمات الطبية', href: '/services' },
  { name: 'المواعيد', href: '/appointments' },
  { name: 'الأخبار', href: '/news' },
  { name: 'اتصل بنا', href: '/contact' },
];

const medicalServices = [
  { name: 'الطوارئ', href: '/services/emergency' },
  { name: 'العيادات الخارجية', href: '/services/outpatient' },
  { name: 'المختبر', href: '/services/laboratory' },
  { name: 'الأشعة', href: '/services/radiology' },
  { name: 'الصيدلية', href: '/services/pharmacy' },
  { name: 'العمليات الجراحية', href: '/services/surgery' },
  { name: 'العناية المركزة', href: '/services/icu' },
];

const patientResources = [
  { name: 'حجز موعد', href: '/appointments' },
  { name: 'دليل المريض', href: '/patient-guide' },
  { name: 'الأسئلة الشائعة', href: '/faq' },
  { name: 'سياسة الخصوصية', href: '/privacy' },
  { name: 'شروط الخدمة', href: '/terms' },
];

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaXTwitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-slate-800">
          <div className="max-w-xl">
            <Link href="/" className="flex items-center group" aria-label="مستشفى حضرموت الحديث">
              <Image 
                src="/logo-white.svg" 
                alt="شعار مستشفى حضرموت الحديث" 
                width={288} 
                height={80} 
                className="w-72 h-auto" 
                priority 
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-secondary hover:border-brand-secondary/30 hover:bg-slate-900/50 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <nav aria-label="روابط سريعة" className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors duration-200 block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="الخدمات الطبية" className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">الخدمات الطبية</h4>
            <ul className="space-y-2.5 text-sm">
              {medicalServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors duration-200 block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="موارد المريض" className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">موارد المريض</h4>
            <ul className="space-y-2.5 text-sm">
              {patientResources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors duration-200 block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="space-y-4 not-italic">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">معلومات الاتصال</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>الخط الرئيسي، فوه، المكلا، حضرموت، اليمن</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-secondary shrink-0" />
                <a href="tel:+9675300000" className="hover:text-brand-secondary transition-colors" dir="ltr">+967 5 300000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-secondary shrink-0" />
                <a href="mailto:info@hmh.com" className="hover:text-brand-secondary transition-colors">info@hmh.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>العيادات الخارجية: 8:00 صباحاً – 10:00 مساءً</span>
              </li>
              {/* <li className="pt-2 border-t border-slate-900">
                <a 
                  href="tel:+9675311111" 
                  className="flex items-center gap-2 px-3 py-2 bg-rose-950/40 text-rose-400 rounded-lg border border-rose-900/50 hover:bg-rose-950/60 hover:border-rose-800 transition-all duration-300 w-full justify-center group"
                >
                  <AlertCircle className="h-4 w-4 text-rose-500 animate-pulse group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-xs tracking-wide" dir="ltr">طوارئ: +967 5 311111</span>
                </a>
              </li> */}
            </ul>
          </address>
        </div>

        <div className="pt-8 border-t border-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} مستشفى حضرموت الحديث. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">شروط الخدمة</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">إعدادات ملفات الارتباط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}