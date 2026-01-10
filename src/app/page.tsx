"use client";

import { LinkButton } from "@/components/LinkButton";
import { ROUTES } from "./constants/routes";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function HomePage() {
  const { t, language } = useLanguage();
  const homeTranslations = translations[language].home;

  return (
    <div>
      <LinkButton href={ROUTES.ACCOUNT}>
        {t(homeTranslations, "links.account")}
      </LinkButton>

      <LinkButton href={ROUTES.LOGOUT}>Logout</LinkButton>
    </div>
  );
}
