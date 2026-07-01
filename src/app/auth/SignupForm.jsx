"use client";
import { useState, useCallback } from "react";
import { Mail, Lock, User, ShieldCheck } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

export default function SignupForm({ onSubmit, isSubmitting }) {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!signupData.fullName) newErrors.fullName = "الاسم الكامل مطلوب";
    else if (signupData.fullName.length < 3)
      newErrors.fullName = "الاسم يجب أن يكون 3 أحرف على الأقل";
    if (!signupData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    else if (!validateEmail(signupData.email))
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
    if (!signupData.password) newErrors.password = "كلمة المرور مطلوبة";
    else if (!validatePassword(signupData.password))
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    if (!signupData.confirmPassword)
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
    else if (signupData.password !== signupData.confirmPassword)
      newErrors.confirmPassword = "كلمات المرور غير متطابقة";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(signupData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Input
        id="signup-fullName"
        name="fullName"
        label="الاسم الكامل"
        type="text"
        icon={User}
        value={signupData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        placeholder="أدخل اسمك الكامل"
        required
      />

      <Input
        id="signup-email"
        name="email"
        label="البريد الإلكتروني"
        type="email"
        icon={Mail}
        value={signupData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="example@email.com"
        dir="ltr"
        required
      />

      <Input
        id="signup-password"
        name="password"
        label="كلمة المرور"
        type="password"
        icon={Lock}
        value={signupData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="8 أحرف على الأقل"
        dir="ltr"
        required
      />

      <Input
        id="signup-confirmPassword"
        name="confirmPassword"
        label="تأكيد كلمة المرور"
        type="password"
        icon={ShieldCheck}
        value={signupData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        placeholder="أعِد إدخال كلمة المرور"
        dir="ltr"
        required
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full rounded-2xl font-bold text-base shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300"
        >
          إنشاء حساب
        </Button>
      </div>
    </form>
  );
}
