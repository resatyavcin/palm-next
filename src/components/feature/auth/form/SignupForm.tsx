"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { useSignupForm } from "./hooks/useSignupForm";
import { FormField } from "../FormField";
import { SubmitButton } from "../../../SubmitButton";
import { useRegister } from "@/lib/hooks/useAuth";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function SignupForm() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignupForm();

  const registerMutation = useRegister();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerMutation.mutateAsync({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
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
          <FormField
            id="password"
            label={t(authTranslations, "fields.password.label")}
            type="password"
            placeholder={t(authTranslations, "fields.password.placeholder")}
            register={register("password")}
            error={errors.password}
          />
          <FormField
            id="confirmPassword"
            label={t(authTranslations, "fields.confirmPassword.label")}
            type="password"
            placeholder={t(
              authTranslations,
              "fields.confirmPassword.placeholder"
            )}
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <SubmitButton
          className="w-full"
          isLoading={registerMutation.isPending}
          loadingText={t(authTranslations, "buttons.signup.submitting")}
        >
          {t(authTranslations, "buttons.signup.default")}
        </SubmitButton>
      </CardFooter>
    </form>
  );
}
