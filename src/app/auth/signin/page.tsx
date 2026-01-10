"use client";

import FormCardComponent from "@/components/feature/auth/FormCard";
import SigninForm from "@/components/feature/auth/form/SigninForm";
import { ROUTES } from "@/app/constants/routes";
import { LinkButton } from "@/components/LinkButton";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function SigninPage() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;

  return (
    <FormCardComponent
      title={t(authTranslations, "pages.signin.title")}
      description={t(authTranslations, "pages.signin.description")}
      action={
        <LinkButton href={ROUTES.AUTH_SIGNUP}>
          {t(authTranslations, "links.signUp")}
        </LinkButton>
      }
      form={<SigninForm />}
    />
  );
}
