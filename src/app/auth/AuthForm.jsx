"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  HeartPulse,
  ShieldCheck,
  Lock,
  CheckCircle,
} from "lucide-react";
import AuthToggle from "./AuthToggle";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "../../components/ui/Button";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSubmitSuccess(false);
  };

  return (
    <section
      dir="rtl"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 px-4 sm:px-6"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 w-full max-w-[480px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            {activeTab === "login" ? "مرحباً بعودتك" : "أنشئ حسابك"}
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {activeTab === "login"
              ? "سجّل دخولك للوصول إلى خدماتنا الطبية"
              : "انضم إلينا واستمتع بخدماتنا الطبية المتكاملة"}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10">
          <AuthToggle activeTab={activeTab} onTabChange={handleTabChange} />

          {submitSuccess && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl p-4 mt-6">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold">
                {activeTab === "login"
                  ? "تم تسجيل الدخول بنجاح!"
                  : "تم إنشاء الحساب بنجاح!"}
              </span>
            </div>
          )}

          <div className="mt-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <motion.div
                  key="login-tab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <LoginForm
                    onSubmit={handleFormSubmit}
                    isSubmitting={isSubmitting}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="signup-tab"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <SignupForm
                    onSubmit={handleFormSubmit}
                    isSubmitting={isSubmitting}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 font-bold">أو</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-2xl py-3.5 font-bold text-sm transition-all duration-200"
            >
              <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
              التسجيل بواسطة Google
            </Button>
          </div>
        </div>

        {/* <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>العودة إلى الرئيسية</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 text-gray-400">
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-success" />
            <span>اتصال آمن</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Lock className="w-4 h-4 text-brand-primary" />
            <span>بيانات مشفرة</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <HeartPulse className="w-4 h-4 text-brand-secondary" />
            <span>خصوصية تامة</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
