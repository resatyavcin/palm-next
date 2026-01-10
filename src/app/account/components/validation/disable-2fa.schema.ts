import { z } from "zod";

export const disable2FASchema = z.object({
  password: z
    .string()
    .min(1, "Current password is required")
    .min(6, "Password must be at least 6 characters"),
  code: z
    .string()
    .min(1, "Two-factor auth code is required")
    .length(6, "Verification code must be 6 digits")
    .regex(/^\d+$/, "Verification code must contain only numbers"),
});

export type Disable2FAFormData = z.infer<typeof disable2FASchema>;

