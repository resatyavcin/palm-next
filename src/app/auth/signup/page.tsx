import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import SignupForm, {
  SignupFormFooter,
} from "@/components/feature/auth/SignupForm";

export default function SignupPage() {
  return (
    <FormCardComponent
      title="Create an account"
      description="Enter your information to create your account"
      action={<Button variant="link">Sign In</Button>}
      form={<SignupForm />}
      footer={<SignupFormFooter />}
      logo={"/logo.svg"}
    />
  );
}
