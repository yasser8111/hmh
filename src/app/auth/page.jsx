import AuthForm from "./AuthForm";

export const metadata = {
  title: "مستشفى حضرموت الحديث | تسجيل الدخول",
  description:
    "سجل دخولك أو أنشئ حسابك في مستشفى حضرموت الحديث للوصول إلى خدماتنا الطبية المتكاملة وحجز المواعيد.",
};

export default function AuthPage() {
  return <AuthForm />;
}
