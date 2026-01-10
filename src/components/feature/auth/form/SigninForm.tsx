"use client";

import Link from "next/link";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useSigninForm } from "./hooks/useSigninForm";
import { FormField } from "../FormField";
import { ROUTES } from "@/app/constants/routes";
import { SubmitButton } from "../../../SubmitButton";
import { useLogin } from "@/lib/hooks/useAuth";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function SigninForm() {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSigninForm();

  const loginMutation = useLogin();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      console.log("Login successful", response);
    } catch (error) {
      console.error("Login failed:", error);
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
            labelHeader={
              <Link
                href={ROUTES.AUTH_FORGOT_PASSWORD}
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                {t(authTranslations, "links.forgotPassword")}
              </Link>
            }
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <SubmitButton
          className="w-full"
          isLoading={loginMutation.isPending}
          loadingText={t(authTranslations, "buttons.signin.submitting")}
        >
          {t(authTranslations, "buttons.signin.default")}
        </SubmitButton>
      </CardFooter>
    </form>
  );
}
