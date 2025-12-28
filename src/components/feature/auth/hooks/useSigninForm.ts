import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signinSchema, type SigninFormData } from "../validation/signin.schema";

export function useSigninForm() {
  const form = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  return form;
}
