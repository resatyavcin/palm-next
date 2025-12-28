"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useSignupForm } from "./hooks/useSignupForm";
import { FormField } from "./FormField";
import { AUTH_MESSAGES } from "./constants/messages";

export default function SignupForm() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useSignupForm();

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
          <FormField
            id="password"
            label={AUTH_MESSAGES.fields.password.label}
            type="password"
            placeholder={AUTH_MESSAGES.fields.password.placeholder}
            register={register("password")}
            error={errors.password}
          />
          <FormField
            id="confirmPassword"
            label={AUTH_MESSAGES.fields.confirmPassword.label}
            type="password"
            placeholder={AUTH_MESSAGES.fields.confirmPassword.placeholder}
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? AUTH_MESSAGES.buttons.signup.submitting
            : AUTH_MESSAGES.buttons.signup.default}
        </Button>
      </CardFooter>
    </form>
  );
}
