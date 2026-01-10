"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { useForgotPasswordForm } from "./hooks/useForgotPasswordForm";
import { FormField } from "../FormField";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { SubmitButton } from "../../../SubmitButton";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@/app/constants/routes";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForgotPasswordForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push(AUTH_ROUTES.resetPasswordSent);
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
        <SubmitButton
          className="w-full"
          isLoading={isSubmitting}
          loadingText={AUTH_MESSAGES.buttons.forgotPassword.submitting}
        >
          {AUTH_MESSAGES.buttons.forgotPassword.default}
        </SubmitButton>
      </CardFooter>
    </form>
  );
}
