"use client";

import { useState } from "react";
import TwoFactorSettings from "@/app/account/components/TwoFactorSettings";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

const AccountPage = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const handleDisable2FA = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsTwoFactorEnabled(false);
  };

  const handleEnable2FA = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsTwoFactorEnabled(true);
  };

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {ACCOUNT_MESSAGES.page.title}
          </h1>
          <p className="text-muted-foreground">
            {ACCOUNT_MESSAGES.page.description}
          </p>
        </div>

        <TwoFactorSettings
          isEnabled={isTwoFactorEnabled}
          onDisable={handleDisable2FA}
          onEnable={handleEnable2FA}
          learnMoreUrl={ACCOUNT_MESSAGES.twoFactor.learnMoreUrl}
        />
      </div>
    </div>
  );
};

export default AccountPage;
