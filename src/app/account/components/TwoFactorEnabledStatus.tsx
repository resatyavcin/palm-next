"use client";

import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function TwoFactorEnabledStatus() {
  const { t, language } = useLanguage();
  const accountTranslations = translations[language].account;

  return (
    <div className="flex items-center gap-3 rounded-lg bg-green-700/90 dark:bg-slate-700/50 p-4 border border-slate-300/50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 dark:bg-green-500/20">
        <ShieldCheck
          className="h-5 w-5 text-white dark:text-green-400 stroke-2"
          strokeWidth={2}
        />
      </div>
      <p className="font-semibold text-white dark:text-green-400">
        {t(accountTranslations, "twoFactor.enabled.title")}
      </p>
    </div>
  );
}
