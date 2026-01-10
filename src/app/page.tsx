"use client";

import { LinkButton } from "@/components/LinkButton";
import { APP_ROUTES } from "./constants/routes";
import { ACCOUNT_MESSAGES } from "./account/constants/messages";

export default function HomePage() {
  return (
    <div>
      <LinkButton href={APP_ROUTES.account}>
        {ACCOUNT_MESSAGES.links.account}
      </LinkButton>

      <LinkButton href={APP_ROUTES.logout}>Logout</LinkButton>
    </div>
  );
}
