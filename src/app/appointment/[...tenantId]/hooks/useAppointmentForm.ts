import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  appointmentSchema,
  type AppointmentFormData,
} from "../validation/appointment.schema";

export function useAppointmentForm() {
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  return form;
}

