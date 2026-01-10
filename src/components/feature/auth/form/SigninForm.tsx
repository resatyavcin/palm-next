"use client";

import Link from "next/link";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useSigninForm } from "./hooks/useSigninForm";
import { FormField } from "../FormField";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { SubmitButton } from "../../../SubmitButton";
import { useLogin } from "@/lib/hooks/useAuth";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSigninForm();

  const loginMutation = useLogin();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      console.log("Login successful", response);
    } catch (error) {
      console.error("Login failed:", error);
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
            labelHeader={
              <Link
                href={AUTH_ROUTES.forgotPassword}
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                {AUTH_MESSAGES.links.forgotPassword}
              </Link>
            }
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <SubmitButton
          className="w-full"
          isLoading={loginMutation.isPending}
          loadingText={AUTH_MESSAGES.buttons.signin.submitting}
        >
          {AUTH_MESSAGES.buttons.signin.default}
        </SubmitButton>
      </CardFooter>
    </form>
  );
}
