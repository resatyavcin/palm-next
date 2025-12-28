import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupFormData } from "../validation/signup.schema";

export function useSignupForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup Form Data:", data);
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}

