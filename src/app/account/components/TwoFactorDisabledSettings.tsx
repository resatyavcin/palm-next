"use client";

import { useState } from "react";
import { Link2, ChevronDown, ChevronUp } from "lucide-react";
import QRCodeSVG from "react-qr-code";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Enable2FAForm from "./forms/Enable2FAForm";
import SecretKeyModal from "./SecretKeyModal";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

interface TwoFactorDisabledSettingsProps {
  qrCodeValue?: string;
  secret?: string;
  onEnable?: () => Promise<void>;
  learnMoreUrl?: string;
}

export default function TwoFactorDisabledSettings({
  qrCodeValue = "otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example",
  secret = "JBSWY3DPEHPK3PXP",
  onEnable,
  learnMoreUrl = ACCOUNT_MESSAGES.twoFactor.learnMoreUrl,
}: TwoFactorDisabledSettingsProps) {
  const [isEnabling, setIsEnabling] = useState(false);
  const [isSecretKeyModalOpen, setIsSecretKeyModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEnable = async (data: { password: string; code: string }) => {
    if (!onEnable) return;
    setIsEnabling(true);
    try {
      // This would normally call your API to enable 2FA with password and code
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Enable Form Data:", data);
      await onEnable();
    } catch (error) {
      console.error("Failed to enable 2FA:", error);
      throw error;
    } finally {
      setIsEnabling(false);
    }
  };

  const description = (
    <>
      Two-factor authentication (2FA,{" "}
      <a
        href={learnMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-primary hover:underline"
      >
        {ACCOUNT_MESSAGES.twoFactor.disabled.learnMore}
        <Link2 className="h-3 w-3" />
      </a>
      ) adds an additional level of security to your account by requiring more
      than just a password to sign in.
    </>
  );

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between">
              <div className="text-left space-y-1">
                <CardTitle>{ACCOUNT_MESSAGES.twoFactor.disabled.title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
              )}
            </div>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {ACCOUNT_MESSAGES.twoFactor.disabled.setupInstructions}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="flex flex-col gap-4 items-center">
                  <div className="p-4 bg-white rounded-lg border">
                    <QRCodeSVG value={qrCodeValue} size={200} />
                  </div>
                  <div className="text-center w-full">
                    <button
                      type="button"
                      onClick={() => setIsSecretKeyModalOpen(true)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                    >
                      {ACCOUNT_MESSAGES.twoFactor.disabled.enterManually}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">
                      {ACCOUNT_MESSAGES.twoFactor.disabled.verifyTitle}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {ACCOUNT_MESSAGES.twoFactor.disabled.verifyDescription}
                    </p>
                  </div>
                  <Enable2FAForm
                    onSubmit={handleEnable}
                    isSubmitting={isEnabling}
                  />
                </div>
              </div>

              <SecretKeyModal
                open={isSecretKeyModalOpen}
                onOpenChange={setIsSecretKeyModalOpen}
                secret={secret}
              />
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
