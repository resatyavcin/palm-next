"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useSigninForm } from "./hooks/useSigninForm";
import { FormField } from "./FormField";

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
            label="Email"
            type="email"
            placeholder="someone@example.com"
            register={register("email")}
            error={errors.email}
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="********"
            register={register("password")}
            error={errors.password}
            labelHeader={
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            }
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </CardFooter>
    </form>
  );
}
