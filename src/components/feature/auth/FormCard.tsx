import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import React from "react";

const FormCardComponent = ({
  title,
  description,
  action,
  form,
  footer,
}: {
  title: string;
  description: string;
  action: React.ReactNode;
  form: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>{action}</CardAction>
      </CardHeader>
      <CardContent>{form}</CardContent>
      <CardFooter className="flex-col gap-2">{footer}</CardFooter>
    </Card>
  );
};

export default FormCardComponent;
