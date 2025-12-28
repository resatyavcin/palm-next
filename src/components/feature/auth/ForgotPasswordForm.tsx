"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useForgotPasswordForm } from "./hooks/useForgotPasswordForm";
import { FormField } from "./FormField";

export default function ForgotPasswordForm() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useForgotPasswordForm();

  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="someone@example.com"
            register={register("email")}
            error={errors.email}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </Button>
      </CardFooter>
    </form>
  );
}

