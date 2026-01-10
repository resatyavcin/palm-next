"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { useForgotPasswordForm } from "./hooks/useForgotPasswordForm";
import { FormField } from "../FormField";
import { SubmitButton } from "../../../SubmitButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants/routes";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function ForgotPasswordForm() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForgotPasswordForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push(ROUTES.AUTH_RESET_PASSWORD_SENT);
    console.log("Forgot Password Form Data:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <FormField
            id="email"
            label={t(authTranslations, "fields.email.label")}
            type="email"
            placeholder={t(authTranslations, "fields.email.placeholder")}
            register={register("email")}
            error={errors.email}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <SubmitButton
          className="w-full"
          isLoading={isSubmitting}
          loadingText={t(authTranslations, "buttons.forgotPassword.submitting")}
        >
          {t(authTranslations, "buttons.forgotPassword.default")}
        </SubmitButton>
      </CardFooter>
    </form>
  );
}
