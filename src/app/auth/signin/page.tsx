import FormCardComponent from "@/components/feature/auth/FormCard";
import SigninForm from "@/components/feature/auth/form/SigninForm";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { LinkButton } from "@/components/LinkButton";

export default function SigninPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.signin.title}
      description={AUTH_MESSAGES.pages.signin.description}
      action={
        <LinkButton href={AUTH_ROUTES.signup}>
          {AUTH_MESSAGES.links.signUp}
        </LinkButton>
      }
      form={<SigninForm />}
    />
  );
}
