import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import SigninForm, {
  SigninFormFooter,
} from "@/components/feature/auth/SigninForm";

export default function SigninPage() {
  return (
    <FormCardComponent
      title="Login to your account"
      description="Enter your email below to login to your account"
      action={<Button variant="link">Sign Up</Button>}
      form={<SigninForm />}
      footer={<SigninFormFooter />}
      logo={"/logo.svg"}
    />
  );
}
