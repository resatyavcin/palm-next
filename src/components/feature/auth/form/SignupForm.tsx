"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { useSignupForm } from "./hooks/useSignupForm";
import { FormField } from "../FormField";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { SubmitButton } from "../SubmitButton";
import { useRegister } from "@/lib/hooks/useAuth";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignupForm();

  const registerMutation = useRegister();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerMutation.mutateAsync({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
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
        <SubmitButton
          className="w-full"
          isLoading={registerMutation.isPending}
          loadingText={AUTH_MESSAGES.buttons.signup.submitting}
        >
          {AUTH_MESSAGES.buttons.signup.default}
        </SubmitButton>
      </CardFooter>
    </form>
  );
}
