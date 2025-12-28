"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useTwoFactorVerifyForm } from "./hooks/useTwoFactorVerifyForm";
import { FormFieldOTP } from "./FormFieldOTP";
import { AUTH_MESSAGES } from "./constants/messages";

export default function TwoFactorVerifyForm() {
  const {
    control,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useTwoFactorVerifyForm();

  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <FormFieldOTP
            id="code"
            label={AUTH_MESSAGES.fields.verificationCode.label}
            name="code"
            control={control}
            error={errors.code}
            maxLength={6}
          />
          <p className="text-sm text-muted-foreground">
            {AUTH_MESSAGES.helpers.twoFactorVerify.instructions}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? AUTH_MESSAGES.buttons.verify.submitting
            : AUTH_MESSAGES.buttons.verify.default}
        </Button>
      </CardFooter>
    </form>
  );
}
