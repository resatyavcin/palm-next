import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  twoFactorVerifySchema,
  type TwoFactorVerifyFormData,
} from "../validation/two-factor-verify.schema";

export function useTwoFactorVerifyForm() {
  const form = useForm<TwoFactorVerifyFormData>({
    resolver: zodResolver(twoFactorVerifySchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: TwoFactorVerifyFormData) => {
    console.log("Two Factor Verify Form Data:", data);
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
