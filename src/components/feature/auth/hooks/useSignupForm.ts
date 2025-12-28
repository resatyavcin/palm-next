import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupFormData } from "../validation/signup.schema";

export function useSignupForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  return form;
}
