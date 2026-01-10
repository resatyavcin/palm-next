"use client";

import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";
import { ShieldCheck } from "lucide-react";

export default function TwoFactorEnabledStatus() {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-green-700/90 dark:bg-slate-700/50 p-4 border border-slate-300/50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 dark:bg-green-500/20">
        <ShieldCheck
          className="h-5 w-5 text-white dark:text-green-400 stroke-2"
          strokeWidth={2}
        />
      </div>
      <p className="font-semibold text-white dark:text-green-400">
        {ACCOUNT_MESSAGES.twoFactor.enabled.title}
      </p>
    </div>
  );
}
