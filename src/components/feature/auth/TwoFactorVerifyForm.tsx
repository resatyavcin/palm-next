"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useTwoFactorVerifyForm } from "./hooks/useTwoFactorVerifyForm";
import { FormFieldOTP } from "./FormFieldOTP";
import { AUTH_MESSAGES } from "@/app/constants/messages";

export default function TwoFactorVerifyForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useTwoFactorVerifyForm();

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Two Factor Verify Form Data:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <div className="flex flex-col gap-6 items-center">
          <FormFieldOTP
            id="code"
            label={AUTH_MESSAGES.fields.verificationCode.label}
            name="code"
            control={control}
            error={errors.code}
            maxLength={6}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner />
              {AUTH_MESSAGES.buttons.verify.submitting}
            </>
          ) : (
            AUTH_MESSAGES.buttons.verify.default
          )}
        </Button>
      </CardFooter>
    </form>
  );
}
