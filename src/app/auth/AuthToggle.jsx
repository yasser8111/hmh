"use client";

export default function AuthToggle({ activeTab, onTabChange }) {
  return (
    <div className="relative flex bg-slate-100 rounded-2xl p-1.5">
      <div
        className="absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-md transition-all duration-300 ease-out"
        style={{
          width: "calc(50% - 6px)",
          right: activeTab === "signup" ? "6px" : "calc(50% + 0px)",
        }}
      />
      <button
        type="button"
        onClick={() => onTabChange("signup")}
        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors duration-200 relative z-10 cursor-pointer ${
          activeTab === "signup" ? "text-brand-primary" : "text-gray-500"
        }`}
      >
        إنشاء حساب
      </button>
      <button
        type="button"
        onClick={() => onTabChange("login")}
        className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors duration-200 relative z-10 cursor-pointer ${
          activeTab === "login" ? "text-brand-primary" : "text-gray-500"
        }`}
      >
        تسجيل الدخول
      </button>
    </div>
  );
}