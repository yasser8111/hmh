import React from 'react';
import { MapPin, Phone, Mail, Clock, PhoneCall, HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 md:px-16 lg:px-24 border-t-4 border-brand-primary mt-12" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <HeartPulse className="w-8 h-8 text-brand-secondary" />
            <span className="text-2xl font-black text-white">مستشفى حضرموت الحديث</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">تواصل معنا</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
              <span className="leading-relaxed">المكلا، حضرموت،<br />الجمهورية اليمنية</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
              <span dir="ltr" className="font-semibold text-white">+967 5 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
              <span className="text-white hover:text-brand-secondary transition-colors cursor-pointer">info@hadramout-hospital.com</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Important Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">معلومات هامة</h3>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4 text-brand-secondary">
              <Clock className="w-6 h-6" />
              <span className="font-bold text-lg text-white">ساعات العمل</span>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between items-center border-b border-slate-700/50 pb-3 mb-3">
                <span>السبت - الخميس</span>
                <span className="font-bold text-white text-left" dir="ltr">7 AM - 10 PM</span>
              </p>
              <p className="flex justify-between items-center">
                <span>الجمعة</span>
                <span className="font-bold text-rose-400">طوارئ فقط</span>
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Emergency */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">خط الطوارئ المباشر</h3>
          <div className="bg-gradient-to-br from-rose-600 to-red-700 rounded-2xl p-8 text-center text-white shadow-lg shadow-rose-900/20 relative overflow-hidden group cursor-pointer hover:shadow-rose-900/40 transition-all duration-300 hover:-translate-y-1">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
            
            <PhoneCall className="w-10 h-10 mx-auto mb-4 opacity-90 group-hover:animate-bounce" />
            <div className="text-5xl font-black mb-4 tracking-wider" dir="ltr">
              1999
            </div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
              متاح 24 ساعة / 7 أيام
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm font-medium">
        © {new Date().getFullYear()} مستشفى حضرموت الحديث. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}