"use client";

import { FormField } from "@/components/feature/auth/FormField";
import { useChangePasswordForm } from "../hooks/useChangePasswordForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

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
  const changePasswordForm = useChangePasswordForm();

  const handleSubmit = changePasswordForm.handleSubmit(async (data) => {
    await onSubmit(data);
    changePasswordForm.reset();
  });

  const { isValid } = changePasswordForm.formState;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="current-password"
        label={ACCOUNT_MESSAGES.passwordChange.forms.currentPassword.label}
        type="password"
        placeholder={
          ACCOUNT_MESSAGES.passwordChange.forms.currentPassword.placeholder
        }
        register={changePasswordForm.register("currentPassword")}
        error={changePasswordForm.formState.errors.currentPassword}
      />
      <FormField
        id="new-password"
        label={ACCOUNT_MESSAGES.passwordChange.forms.newPassword.label}
        type="password"
        placeholder={
          ACCOUNT_MESSAGES.passwordChange.forms.newPassword.placeholder
        }
        register={changePasswordForm.register("newPassword")}
        error={changePasswordForm.formState.errors.newPassword}
      />
      <FormField
        id="confirm-new-password"
        label={ACCOUNT_MESSAGES.passwordChange.forms.confirmNewPassword.label}
        type="password"
        placeholder={
          ACCOUNT_MESSAGES.passwordChange.forms.confirmNewPassword.placeholder
        }
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
            ? ACCOUNT_MESSAGES.passwordChange.forms.submitting
            : ACCOUNT_MESSAGES.passwordChange.forms.button}
        </Button>
      </div>
    </form>
  );
}
