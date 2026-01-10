import FormCardComponent from "@/components/feature/auth/FormCard";
import SignupForm from "@/components/feature/auth/form/SignupForm";
import { ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { LinkButton } from "@/components/LinkButton";

export default function SignupPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.signup.title}
      description={AUTH_MESSAGES.pages.signup.description}
      action={
        <LinkButton href={ROUTES.AUTH_SIGNIN}>
          {AUTH_MESSAGES.links.signIn}
        </LinkButton>
      }
      form={<SignupForm />}
    />
  );
}
