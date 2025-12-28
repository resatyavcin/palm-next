import * as React from "react";
import {
  Controller,
  Control,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldOTPProps<TFieldValues extends FieldValues> {
  id: string;
  label?: string;
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  error?: FieldError;
  labelHeader?: React.ReactNode;
  className?: string;
  maxLength?: number;
}

export function FormFieldOTP<TFieldValues extends FieldValues>({
  id,
  label,
  name,
  control,
  error,
  labelHeader,
  className,
  maxLength = 6,
}: FormFieldOTPProps<TFieldValues>) {
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
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputOTP
            maxLength={maxLength}
            value={field.value}
            onChange={field.onChange}
            aria-invalid={error ? "true" : "false"}
          >
            {Array.from({ length: maxLength }).map((_, index) => (
              <InputOTPGroup key={index}>
                <InputOTPSlot key={index} index={index} />
              </InputOTPGroup>
            ))}
          </InputOTP>
        )}
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
