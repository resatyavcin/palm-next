"use client";

import { FormField } from "@/components/feature/auth/FormField";
import { useChangePasswordForm } from "../hooks/useChangePasswordForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface ChangePasswordFormProps {
  onSubmit: (data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => Promise<void>;
  isSubmitting?: boolean;
}

export default function ChangePasswordForm({
  onSubmit,
  isSubmitting = false,
}: ChangePasswordFormProps) {
  const { t, language } = useLanguage();
  const changePasswordForm = useChangePasswordForm();
  const accountTranslations = translations[language].account;

  const handleSubmit = changePasswordForm.handleSubmit(async (data) => {
    await onSubmit(data);
    changePasswordForm.reset();
  });

  const { isValid } = changePasswordForm.formState;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="current-password"
        label={t(
          accountTranslations,
          "passwordChange.forms.currentPassword.label"
        )}
        type="password"
        placeholder={t(
          accountTranslations,
          "passwordChange.forms.currentPassword.placeholder"
        )}
        register={changePasswordForm.register("currentPassword")}
        error={changePasswordForm.formState.errors.currentPassword}
      />
      <FormField
        id="new-password"
        label={t(accountTranslations, "passwordChange.forms.newPassword.label")}
        type="password"
        placeholder={t(
          accountTranslations,
          "passwordChange.forms.newPassword.placeholder"
        )}
        register={changePasswordForm.register("newPassword")}
        error={changePasswordForm.formState.errors.newPassword}
      />
      <FormField
        id="confirm-new-password"
        label={t(
          accountTranslations,
          "passwordChange.forms.confirmNewPassword.label"
        )}
        type="password"
        placeholder={t(
          accountTranslations,
          "passwordChange.forms.confirmNewPassword.placeholder"
        )}
        register={changePasswordForm.register("confirmNewPassword")}
        error={changePasswordForm.formState.errors.confirmNewPassword}
      />
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          variant={isValid ? "default" : "secondary"}
          className={cn(
            "w-full font-medium",
            !isValid &&
              "disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
          )}
        >
          {isSubmitting
            ? t(accountTranslations, "passwordChange.forms.submitting")
            : t(accountTranslations, "passwordChange.forms.button")}
        </Button>
      </div>
    </form>
  );
}
