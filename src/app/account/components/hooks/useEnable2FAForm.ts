import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  enable2FASchema,
  type Enable2FAFormData,
} from "../validation/enable-2fa.schema";

export function useEnable2FAForm() {
  const form = useForm<Enable2FAFormData>({
    resolver: zodResolver(enable2FASchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      code: "",
    },
  });

  return form;
}
