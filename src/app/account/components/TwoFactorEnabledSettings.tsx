"use client";

import { useState } from "react";
import { Link2, ChevronDown, ChevronUp } from "lucide-react";
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
import TwoFactorEnabledStatus from "./TwoFactorEnabledStatus";
import Disable2FAForm from "./forms/Disable2FAForm";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface TwoFactorEnabledSettingsProps {
  onDisable?: () => Promise<void>;
  learnMoreUrl?: string;
}

export default function TwoFactorEnabledSettings({
  onDisable,
  learnMoreUrl,
}: TwoFactorEnabledSettingsProps) {
  const { t, language } = useLanguage();
  const accountTranslations = translations[language].account;
  const defaultLearnMoreUrl = accountTranslations.twoFactor.learnMoreUrl;
  const [isDisabling, setIsDisabling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDisable = async (data: { password: string; code: string }) => {
    if (!onDisable) return;
    setIsDisabling(true);
    try {
      // This would normally call your API to disable 2FA with password and code
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Disable Form Data:", data);
      await onDisable();
    } catch (error) {
      console.error("Failed to disable 2FA:", error);
      throw error;
    } finally {
      setIsDisabling(false);
    }
  };

  const description = (
    <>
      Two-factor authentication (2FA,{" "}
      <a
        href={learnMoreUrl || defaultLearnMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-primary hover:underline"
      >
        {t(accountTranslations, "twoFactor.disabled.learnMore")}
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
                <CardTitle>
                  {t(accountTranslations, "twoFactor.enabled.disableTitle")}
                </CardTitle>
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
              <TwoFactorEnabledStatus />

              <Disable2FAForm
                onSubmit={handleDisable}
                isSubmitting={isDisabling}
              />
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
