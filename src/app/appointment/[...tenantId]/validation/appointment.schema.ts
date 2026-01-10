import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(1, "İsim soyisim gereklidir")
    .min(3, "İsim soyisim en az 3 karakter olmalıdır"),
  phoneNumber: z
    .string()
    .min(1, "Telefon numarası gereklidir")
    .regex(
      /^[0-9]{10}$/,
      "Telefon numarası 10 haneli olmalıdır (örn: 5555555555)"
    ),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
