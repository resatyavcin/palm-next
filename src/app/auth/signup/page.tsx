import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import SignupForm from "@/components/feature/auth/SignupForm";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";

export default function SignupPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.signup.title}
      description={AUTH_MESSAGES.pages.signup.description}
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signin}>{AUTH_MESSAGES.links.signIn}</Link>
        </Button>
      }
      form={<SignupForm />}
    />
  );
}
