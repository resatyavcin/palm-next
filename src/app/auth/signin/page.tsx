import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import SigninForm from "@/components/feature/auth/SigninForm";
import { AUTH_ROUTES } from "@/components/feature/auth/constants/routes";

export default function SigninPage() {
  return (
    <FormCardComponent
      title="Login to your account"
      description="Enter your email below to login to your account"
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signup}>Sign Up</Link>
        </Button>
      }
      form={<SigninForm />}
      footer={null}
      logo={"/logo.svg"}
    />
  );
}
