import { z } from "zod";

export const twoFactorVerifySchema = z.object({
  code: z
    .string()
    .min(1, "Verification code is required")
    .length(6, "Verification code must be 6 digits")
    .regex(/^\d+$/, "Verification code must contain only numbers"),
});

export type TwoFactorVerifyFormData = z.infer<typeof twoFactorVerifySchema>;
