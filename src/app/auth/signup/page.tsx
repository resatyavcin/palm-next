"use client";

import FormCardComponent from "@/components/feature/auth/FormCard";
import SignupForm from "@/components/feature/auth/form/SignupForm";
import { ROUTES } from "@/app/constants/routes";
import { LinkButton } from "@/components/LinkButton";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function SignupPage() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;

  return (
    <FormCardComponent
      title={t(authTranslations, "pages.signup.title")}
      description={t(authTranslations, "pages.signup.description")}
      action={
        <LinkButton href={ROUTES.AUTH_SIGNIN}>
          {t(authTranslations, "links.signIn")}
        </LinkButton>
      }
      form={<SignupForm />}
    />
  );
}
