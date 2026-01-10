"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentProps } from "react";

interface SubmitButtonProps extends ComponentProps<typeof Button> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function SubmitButton({
  isLoading = false,
  loadingText,
  children,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <>
          <Spinner />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

