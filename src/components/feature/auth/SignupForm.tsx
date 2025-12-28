"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useSignupForm } from "./hooks/useSignupForm";
import { FormField } from "./FormField";

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
            label="Email"
            type="email"
            placeholder="m@example.com"
            register={register("email")}
            error={errors.email}
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            register={register("password")}
            error={errors.password}
          />
          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </Button>
      </CardFooter>
    </form>
  );
}
