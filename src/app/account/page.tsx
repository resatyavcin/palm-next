"use client";

import { useState } from "react";
import TwoFactorSettings from "@/app/account/components/TwoFactorSettings";
import ChangePasswordSettings from "@/app/account/components/ChangePasswordSettings";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const AccountPage = () => {
  const { t, language } = useLanguage();
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const handleDisable2FA = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsTwoFactorEnabled(false);
  };

  const handleEnable2FA = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsTwoFactorEnabled(true);
  };

  const accountTranslations = translations[language].account;

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {t(accountTranslations, "page.title")}
          </h1>
          <p className="text-muted-foreground">
            {t(accountTranslations, "page.description")}
          </p>
        </div>

        <ChangePasswordSettings />

        <TwoFactorSettings
          isEnabled={isTwoFactorEnabled}
          onDisable={handleDisable2FA}
          onEnable={handleEnable2FA}
        />
      </div>
    </div>
  );
};

export default AccountPage;
