"use client";

import { FormFieldOTP } from "../../../../components/feature/auth/FormFieldOTP";
import { useTwoFactorVerifyForm } from "../../../../components/feature/auth/form/hooks/useTwoFactorVerifyForm";
import { Button } from "@/components/ui/button";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

interface Verify2FAFormProps {
  onSubmit: (data: { code: string }) => Promise<void>;
  isSubmitting?: boolean;
}

export default function Verify2FAForm({
  onSubmit,
  isSubmitting = false,
}: Verify2FAFormProps) {
  const verifyForm = useTwoFactorVerifyForm();

  const handleSubmit = verifyForm.handleSubmit(async (data) => {
    await onSubmit(data);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormFieldOTP
        id="verify-code"
        label={AUTH_MESSAGES.fields.verificationCode.label}
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
            ? ACCOUNT_MESSAGES.twoFactor.forms.verify.submitting
            : ACCOUNT_MESSAGES.twoFactor.forms.verify.button}
        </Button>
      </div>
    </form>
  );
}
