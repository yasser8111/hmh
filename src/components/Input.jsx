"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Input({
  id,
  name,
  label,
  type = "text",
  icon: Icon,
  value,
  onChange,
  error,
  success,
  disabled,
  required,
  placeholder,
  dir = "rtl",
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mr-1">
        {label && (
          <label htmlFor={id} className="block text-sm font-bold text-gray-700">
            {label}
            {required && <span className="text-red-500 mr-1">*</span>}
          </label>
        )}
      </div>
      <div className="relative">
        {Icon && (
          <div
            className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
              error
                ? "text-red-400"
                : success
                ? "text-green-500"
                : focused
                ? "text-brand-primary"
                : "text-gray-400"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          id={id}
          name={name || id}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          dir={dir}
          disabled={disabled}
          {...props}
          className={`w-full pr-12 pl-12 py-3.5 bg-slate-50 border-2 rounded-2xl text-gray-900 text-sm font-medium placeholder:text-gray-400 transition-all duration-300 outline-none ${
            disabled
              ? "opacity-60 cursor-not-allowed bg-gray-100 border-gray-200"
              : error
              ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              : success
              ? "border-green-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
              : focused
              ? "border-brand-primary focus:ring-4 focus:ring-brand-primary/10"
              : "border-gray-200 hover:border-gray-300"
          }`}
        />
        {isPassword && !disabled && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
            aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && <p className="text-xs font-bold text-red-500 mr-1">{error}</p>}
    </div>
  );
}