"use client";

import { FormField } from "@/components/feature/auth/FormField";
import { FormFieldOTP } from "@/components/feature/auth/FormFieldOTP";
import { useDisable2FAForm } from "../hooks/useDisable2FAForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

interface Disable2FAFormProps {
  onSubmit: (data: { password: string; code: string }) => Promise<void>;
  isSubmitting?: boolean;
}

export default function Disable2FAForm({
  onSubmit,
  isSubmitting = false,
}: Disable2FAFormProps) {
  const disableForm = useDisable2FAForm();

  const handleSubmit = disableForm.handleSubmit(async (data) => {
    await onSubmit(data);
    disableForm.reset();
  });

  const { isValid } = disableForm.formState;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="current-password"
        label={ACCOUNT_MESSAGES.twoFactor.forms.currentPassword.label}
        type="password"
        placeholder={ACCOUNT_MESSAGES.twoFactor.forms.currentPassword.placeholder}
        register={disableForm.register("password")}
        error={disableForm.formState.errors.password}
      />
      <FormFieldOTP
        id="two-factor-code"
        label={ACCOUNT_MESSAGES.twoFactor.forms.twoFactorCode.label}
        name="code"
        control={disableForm.control}
        error={disableForm.formState.errors.code}
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
            ? ACCOUNT_MESSAGES.twoFactor.forms.disable.submitting
            : ACCOUNT_MESSAGES.twoFactor.forms.disable.button}
        </Button>
      </div>
    </form>
  );
}
