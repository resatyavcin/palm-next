"use client";

import { FormFieldOTP } from "../../../../components/feature/auth/FormFieldOTP";
import { useTwoFactorVerifyForm } from "../../../../components/feature/auth/form/hooks/useTwoFactorVerifyForm";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface Verify2FAFormProps {
  onSubmit: (data: { code: string }) => Promise<void>;
  isSubmitting?: boolean;
}

export default function Verify2FAForm({
  onSubmit,
  isSubmitting = false,
}: Verify2FAFormProps) {
  const { t, language } = useLanguage();
  const authTranslations = translations[language].auth;
  const accountTranslations = translations[language].account;
  const verifyForm = useTwoFactorVerifyForm();

  const handleSubmit = verifyForm.handleSubmit(async (data) => {
    await onSubmit(data);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormFieldOTP
        id="verify-code"
        label={t(authTranslations, "fields.verificationCode.label")}
        name="code"
        control={verifyForm.control}
        error={verifyForm.formState.errors.code}
        maxLength={6}
      />
      <div className="flex justify-end gap-2 pt-2">
        <Button
          type="submit"
          disabled={isSubmitting || verifyForm.formState.isSubmitting}
          variant="default"
          className="w-full sm:w-auto"
        >
          {isSubmitting || verifyForm.formState.isSubmitting
            ? t(accountTranslations, "twoFactor.forms.verify.submitting")
            : t(accountTranslations, "twoFactor.forms.verify.button")}
        </Button>
      </div>
    </form>
  );
}
