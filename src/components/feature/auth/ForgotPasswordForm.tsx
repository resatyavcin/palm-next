"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useForgotPasswordForm } from "./hooks/useForgotPasswordForm";
import { FormField } from "./FormField";
import { AUTH_MESSAGES } from "@/app/constants/messages";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForgotPasswordForm();

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Forgot Password Form Data:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <FormField
            id="email"
            label={AUTH_MESSAGES.fields.email.label}
            type="email"
            placeholder={AUTH_MESSAGES.fields.email.placeholder}
            register={register("email")}
            error={errors.email}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner />
              {AUTH_MESSAGES.buttons.forgotPassword.submitting}
            </>
          ) : (
            AUTH_MESSAGES.buttons.forgotPassword.default
          )}
        </Button>
      </CardFooter>
    </form>
  );
}
