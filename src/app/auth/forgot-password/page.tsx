import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import ForgotPasswordForm from "@/components/feature/auth/ForgotPasswordForm";
import { AUTH_ROUTES } from "@/components/feature/auth/constants/routes";

export default function ForgotPasswordPage() {
  return (
    <FormCardComponent
      title="Forgot your password?"
      description="Enter your email address and we'll send you a link to reset your password"
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signin}>Back to Sign In</Link>
        </Button>
      }
      form={<ForgotPasswordForm />}
      footer={null}
      logo={"/logo.svg"}
    />
  );
}

