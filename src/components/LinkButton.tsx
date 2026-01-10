"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface LinkButtonProps
  extends Omit<ComponentProps<typeof Link>, "href">,
    VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
}

export function LinkButton({
  href,
  variant = "link",
  size = "default",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </Button>
  );
}
