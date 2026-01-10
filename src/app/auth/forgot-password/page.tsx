"use client";

import FormCardComponent from "@/components/feature/auth/FormCard";
import ForgotPasswordForm from "@/components/feature/auth/form/ForgotPasswordForm";
import { ROUTES } from "@/app/constants/routes";
import { LinkButton } from "@/components/LinkButton";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function ForgotPasswordPage() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;

  return (
    <FormCardComponent
      title={t(authTranslations, "pages.forgotPassword.title")}
      description={t(authTranslations, "pages.forgotPassword.description")}
      action={
        <LinkButton href={ROUTES.AUTH_SIGNIN}>
          {t(authTranslations, "links.backToSignIn")}
        </LinkButton>
      }
      form={<ForgotPasswordForm />}
    />
  );
}
