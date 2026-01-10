"use client";

import TwoFactorEnabledSettings from "./TwoFactorEnabledSettings";
import TwoFactorDisabledSettings from "./TwoFactorDisabledSettings";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface TwoFactorSettingsProps {
  isEnabled?: boolean;
  qrCodeValue?: string;
  secret?: string;
  onDisable?: () => Promise<void>;
  onEnable?: () => Promise<void>;
  learnMoreUrl?: string;
}

export default function TwoFactorSettings({
  isEnabled = false,
  qrCodeValue = "otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example",
  secret = "JBSWY3DPEHPK3PXP",
  onDisable,
  onEnable,
  learnMoreUrl,
}: TwoFactorSettingsProps) {
  const { language } = useLanguage();
  const accountTranslations = translations[language].account;
  const defaultLearnMoreUrl = accountTranslations.twoFactor.learnMoreUrl;
  if (isEnabled) {
    return (
      <TwoFactorEnabledSettings
        onDisable={onDisable}
        learnMoreUrl={learnMoreUrl || defaultLearnMoreUrl}
      />
    );
  }

  return (
    <TwoFactorDisabledSettings
      qrCodeValue={qrCodeValue}
      secret={secret}
      onEnable={onEnable}
      learnMoreUrl={learnMoreUrl || defaultLearnMoreUrl}
    />
  );
}
