"use client";

import { LinkButton } from "@/components/LinkButton";
import { ROUTES } from "./constants/routes";
import { ACCOUNT_MESSAGES } from "./account/constants/messages";

export default function HomePage() {
  return (
    <div>
      <LinkButton href={ROUTES.ACCOUNT}>
        {ACCOUNT_MESSAGES.links.account}
      </LinkButton>

      <LinkButton href={ROUTES.LOGOUT}>Logout</LinkButton>
    </div>
  );
}
