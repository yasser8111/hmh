import React from 'react';
import { MapPin, Phone, Mail, Clock, PhoneCall, HeartPulse, ChevronLeft } from 'lucide-react';

const socialLinks = [
  { 
    href: '#', 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> 
  },
  { 
    href: '#', 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> 
  },
  { 
    href: '#', 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> 
  },
  { 
    href: '#', 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> 
  }
];

const quickLinks = [
  { name: 'الرئيسية', href: '#' },
  { name: 'نبذة عنا', href: '#' },
  { name: 'الأقسام الطبية', href: '#' },
  { name: 'طاقمنا الطبي', href: '#' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-slate-400 pt-20 pb-8 px-6 md:px-16 lg:px-24 border-t-2 border-slate-800 overflow-hidden" dir="rtl">
      {/* Background soft glowing lights */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
              <HeartPulse className="w-6 h-6 text-brand-secondary" />
            </div>
            <span className="text-xl font-black text-white tracking-wide">مستشفى حضرموت الحديث</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            تقديم خدمات طبية متكاملة بأعلى معايير الجودة، نجمع بين الخبرة الطبية العريقة والتقنيات العلاجية الحديثة.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300">
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h4 className="text-base font-bold text-white relative after:content-[''] after:absolute after:bottom-[-8px] after:right-0 after:w-8 after:h-0.5 after:bg-brand-secondary">
            روابط سريعة
          </h4>
          <ul className="space-y-3 pt-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="flex items-center gap-2 text-sm hover:text-white hover:translate-x-[-4px] transition-all duration-200">
                  <ChevronLeft className="w-4 h-4 text-brand-secondary" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-6">
          <h4 className="text-base font-bold text-white relative after:content-[''] after:absolute after:bottom-[-8px] after:right-0 after:w-8 after:h-0.5 after:bg-brand-secondary">
            تواصل معنا
          </h4>
          <ul className="space-y-4 pt-2">
            <li className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
              <span className="leading-relaxed">المكلا، حضرموت، الجمهورية اليمنية</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
              <span dir="ltr" className="font-semibold text-slate-300">+967 5 123 4567</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
              <span className="text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer">info@hadramout-hospital.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Work Hours & Emergency */}
        <div className="space-y-6">
          <h4 className="text-base font-bold text-white relative after:content-[''] after:absolute after:bottom-[-8px] after:right-0 after:w-8 after:h-0.5 after:bg-brand-secondary">
            معلومات هامة
          </h4>
          <div className="space-y-4 pt-2">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 hover:border-slate-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brand-secondary" />
              </div>
              <div>
                <p className="text-xs text-slate-500">أوقات العمل الرسمي</p>
                <p className="text-sm font-bold text-white">السبت - الخميس (7 AM - 10 PM)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-950/40 via-red-950/20 to-slate-900 border border-rose-900/30 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-rose-500/30 transition-all duration-300 group cursor-pointer">
              <div className="space-y-1">
                <p className="text-xs text-rose-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  خط الطوارئ المباشر
                </p>
                <p className="text-3xl font-black text-white tracking-wider" dir="ltr">1999</p>
                <p className="text-[10px] text-slate-500">متاح 24 ساعة طوال أيام الأسبوع</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                <PhoneCall className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 relative z-10">
        <p>© {currentYear} مستشفى حضرموت الحديث. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
        </div>
      </div>
    </footer>
  );
}