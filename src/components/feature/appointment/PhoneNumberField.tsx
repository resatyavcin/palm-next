"use client";

import * as React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AppointmentFormData } from "@/components/feature/appointment/form/validation/appointment.schema";

interface PhoneNumberFieldProps {
  id: string;
  label: string;
  control: Control<AppointmentFormData>;
  error?: FieldError;
  className?: string;
}

const PHONE_PREFIX = "+90";
const PHONE_LENGTH = 10; // 555 555 55 55

const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "");

  // Limit to 10 digits
  const limitedDigits = digits.slice(0, PHONE_LENGTH);

  // Format: XXX XXX XX XX
  if (limitedDigits.length <= 3) {
    return limitedDigits;
  } else if (limitedDigits.length <= 6) {
    return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
  } else if (limitedDigits.length <= 8) {
    return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(
      3,
      6
    )} ${limitedDigits.slice(6)}`;
  } else {
    return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(
      3,
      6
    )} ${limitedDigits.slice(6, 8)} ${limitedDigits.slice(8)}`;
  }
};

export function PhoneNumberField({
  id,
  label,
  control,
  error,
  className,
}: PhoneNumberFieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => {
          const displayValue = field.value
            ? formatPhoneNumber(field.value)
            : "";

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            // Remove +90 prefix if user tries to type it
            let cleanValue = inputValue.replace(/^\+90\s?/, "");

            // Format the phone number
            const formatted = formatPhoneNumber(cleanValue);

            // Update the form value (only digits, without +90 prefix)
            const digits = formatted.replace(/\D/g, "");

            // Update form field with only digits
            field.onChange(digits);
          };

          return (
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none z-10">
                {PHONE_PREFIX}
              </span>
              <Input
                id={id}
                type="tel"
                placeholder="555 555 55 55"
                value={displayValue}
                onChange={handleChange}
                onBlur={field.onBlur}
                className="pl-12"
                maxLength={14} // 555 555 55 55 (with spaces)
                aria-invalid={error ? "true" : "false"}
              />
            </div>
          );
        }}
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
