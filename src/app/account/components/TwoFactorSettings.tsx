"use client";

import TwoFactorEnabledSettings from "./TwoFactorEnabledSettings";
import TwoFactorDisabledSettings from "./TwoFactorDisabledSettings";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

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
  learnMoreUrl = ACCOUNT_MESSAGES.twoFactor.learnMoreUrl,
}: TwoFactorSettingsProps) {
  if (isEnabled) {
    return (
      <TwoFactorEnabledSettings
        onDisable={onDisable}
        learnMoreUrl={learnMoreUrl}
      />
    );
  }

  return (
    <TwoFactorDisabledSettings
      qrCodeValue={qrCodeValue}
      secret={secret}
      onEnable={onEnable}
      learnMoreUrl={learnMoreUrl}
    />
  );
}
