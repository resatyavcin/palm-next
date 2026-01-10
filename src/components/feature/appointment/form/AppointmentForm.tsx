"use client";

import { FormField } from "@/components/feature/auth/FormField";
import { SubmitButton } from "@/components/SubmitButton";
import { useAppointmentForm } from "./hooks/useAppointmentForm";
import { PhoneNumberField } from "@/components/feature/appointment/PhoneNumberField";

type AppointmentFormProps = {
  onSubmit: (data: { fullName: string; phoneNumber: string }) => void;
  isLoading?: boolean;
};

export default function AppointmentForm({
  onSubmit,
  isLoading = false,
}: AppointmentFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useAppointmentForm();

  const onFormSubmit = handleSubmit(async (data) => {
    // Add +90 prefix before submitting
    const phoneWithPrefix = `+90${data.phoneNumber}`;
    onSubmit({
      ...data,
      phoneNumber: phoneWithPrefix,
    });
  });

  return (
    <form onSubmit={onFormSubmit} className="flex flex-col gap-6">
      <FormField
        id="fullName"
        label="İsim Soyisim"
        type="text"
        placeholder="Adınız ve soyadınız"
        register={register("fullName")}
        error={errors.fullName}
      />
      <PhoneNumberField
        id="phoneNumber"
        label="Telefon Numarası"
        control={control}
        error={errors.phoneNumber}
      />
      <SubmitButton
        className="w-full"
        isLoading={isLoading}
        loadingText="Randevu oluşturuluyor..."
      >
        Randevu Oluştur
      </SubmitButton>
    </form>
  );
}
