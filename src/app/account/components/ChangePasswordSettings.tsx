"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ChangePasswordForm from "./forms/ChangePasswordForm";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

export default function ChangePasswordSettings() {
  const [isChanging, setIsChanging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangePassword = async (data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    setIsChanging(true);
    try {
      // This would normally call your API to change password
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Change Password Form Data:", data);
      toast.success(ACCOUNT_MESSAGES.passwordChange.success);
    } catch (error) {
      console.error("Failed to change password:", error);
      toast.error(ACCOUNT_MESSAGES.passwordChange.error);
      throw error;
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between">
              <div className="text-left space-y-1">
                <CardTitle>{ACCOUNT_MESSAGES.passwordChange.title}</CardTitle>
                <CardDescription>
                  {ACCOUNT_MESSAGES.passwordChange.description}
                </CardDescription>
              </div>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
              )}
            </div>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>
            <ChangePasswordForm
              onSubmit={handleChangePassword}
              isSubmitting={isChanging}
            />
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
