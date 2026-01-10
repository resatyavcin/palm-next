"use client";

import SuccessCardComponent from "@/components/SuccessCard";
import { ROUTES } from "@/app/constants/routes";
import { LinkButton } from "@/components/LinkButton";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function ResetPasswordSentPage() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;

  return (
    <SuccessCardComponent
      title={t(authTranslations, "pages.resetPasswordSent.title")}
      description={t(authTranslations, "pages.resetPasswordSent.description")}
      extraInfo={t(authTranslations, "helpers.resetPasswordSent.noEmailReceived")}
      actions={
        <>
          <LinkButton
            href={ROUTES.AUTH_SIGNIN}
            variant="default"
            className="w-full"
          >
            {t(authTranslations, "links.backToLogin")}
          </LinkButton>
          <LinkButton
            variant="outline"
            href={ROUTES.AUTH_FORGOT_PASSWORD}
            className="w-full"
          >
            {t(authTranslations, "links.resendLink")}
          </LinkButton>
        </>
      }
    />
  );
}
