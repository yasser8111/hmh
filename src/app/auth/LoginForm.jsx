"use client";
import { useState, useCallback } from "react";
import { Mail, Lock } from "lucide-react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

export default function LoginForm({ onSubmit, isSubmitting }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!loginData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    else if (!validateEmail(loginData.email)) newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
    if (!loginData.password) newErrors.password = "كلمة المرور مطلوبة";
    else if (!validatePassword(loginData.password)) newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(loginData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Input
        id="login-email"
        name="email"
        label="البريد الإلكتروني"
        type="email"
        icon={Mail}
        value={loginData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="example@email.com"
        dir="ltr"
        required
      />

      <Input
        id="login-password"
        name="password"
        label="كلمة المرور"
        type="password"
        icon={Lock}
        value={loginData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="••••••••"
        dir="ltr"
        required
      />

      <div className="flex items-center justify-between pt-1">
        <label htmlFor="rememberMe" className="flex items-center gap-2.5 cursor-pointer select-none group">
          <div className="relative">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={loginData.rememberMe}
              onChange={handleChange}
              className="peer sr-only"
            />
            <div className="w-5 h-5 rounded-lg border-2 border-gray-300 bg-slate-50 peer-checked:border-brand-primary peer-checked:bg-brand-primary transition-all duration-200 flex items-center justify-center">
              <svg
                className={`w-3 h-3 text-white transition-opacity duration-200 ${loginData.rememberMe ? 'opacity-100' : 'opacity-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
            تذكرني
          </span>
        </label>
        <a href="#" className="text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors">
          نسيت كلمة المرور؟
        </a>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full rounded-2xl font-bold text-base shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300"
        >
          تسجيل الدخول
        </Button>
      </div>
    </form>
  );
}