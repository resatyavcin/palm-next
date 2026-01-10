"use client";

import { FormField } from "@/components/feature/auth/FormField";
import { FormFieldOTP } from "@/components/feature/auth/FormFieldOTP";
import { useEnable2FAForm } from "../hooks/useEnable2FAForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

interface Enable2FAFormProps {
  onSubmit: (data: { password: string; code: string }) => Promise<void>;
  isSubmitting?: boolean;
}

export default function Enable2FAForm({
  onSubmit,
  isSubmitting = false,
}: Enable2FAFormProps) {
  const enableForm = useEnable2FAForm();

  const handleSubmit = enableForm.handleSubmit(async (data) => {
    await onSubmit(data);
    enableForm.reset();
  });

  const { isValid } = enableForm.formState;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="current-password"
        label={ACCOUNT_MESSAGES.twoFactor.forms.currentPassword.label}
        type="password"
        placeholder={ACCOUNT_MESSAGES.twoFactor.forms.currentPassword.placeholder}
        register={enableForm.register("password")}
        error={enableForm.formState.errors.password}
      />
      <FormFieldOTP
        id="two-factor-code"
        label={ACCOUNT_MESSAGES.twoFactor.forms.twoFactorCode.label}
        name="code"
        control={enableForm.control}
        error={enableForm.formState.errors.code}
        maxLength={6}
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
            ? ACCOUNT_MESSAGES.twoFactor.forms.enable.submitting
            : ACCOUNT_MESSAGES.twoFactor.forms.enable.button}
        </Button>
      </div>
    </form>
  );
}
