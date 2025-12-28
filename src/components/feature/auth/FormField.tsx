import * as React from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type?: React.ComponentProps<"input">["type"];
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  labelHeader?: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
  labelHeader,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      {labelHeader ? (
        <div className="flex items-center">
          <Label htmlFor={id}>{label}</Label>
          {labelHeader}
        </div>
      ) : (
        <Label htmlFor={id}>{label}</Label>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
