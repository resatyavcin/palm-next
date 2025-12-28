"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useSigninForm } from "./hooks/useSigninForm";
import { FormField } from "./FormField";
import { AUTH_ROUTES } from "./constants/routes";
import { AUTH_MESSAGES } from "./constants/messages";

export default function SigninForm() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useSigninForm();

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
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? AUTH_MESSAGES.buttons.signin.submitting
            : AUTH_MESSAGES.buttons.signin.default}
        </Button>
      </CardFooter>
    </form>
  );
}
