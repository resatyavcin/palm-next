import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  disable2FASchema,
  type Disable2FAFormData,
} from "../validation/disable-2fa.schema";

export function useDisable2FAForm() {
  const form = useForm<Disable2FAFormData>({
    resolver: zodResolver(disable2FASchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      code: "",
    },
  });

  return form;
}
