import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import SignupForm from "@/components/feature/auth/SignupForm";
import { AUTH_ROUTES } from "@/components/feature/auth/constants/routes";

export default function SignupPage() {
  return (
    <FormCardComponent
      title="Create an account"
      description="Enter your information to create your account"
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signin}>Sign In</Link>
        </Button>
      }
      form={<SignupForm />}
      footer={null}
      logo={"/logo.svg"}
    />
  );
}
