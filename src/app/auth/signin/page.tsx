import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import SigninForm from "@/components/feature/auth/SigninForm";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";

export default function SigninPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.signin.title}
      description={AUTH_MESSAGES.pages.signin.description}
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signup}>{AUTH_MESSAGES.links.signUp}</Link>
        </Button>
      }
      form={<SigninForm />}
    />
  );
}
