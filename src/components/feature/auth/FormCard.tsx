import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Palmtree } from "lucide-react";

import React from "react";

const FormCardComponent = ({
  title,
  description,
  action,
  form,
  footer,
  logo,
}: {
  title: string;
  description: string;
  action: React.ReactNode;
  form: React.ReactNode;
  footer: React.ReactNode;
  logo?: React.ReactNode | string;
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        {logo && <Palmtree className="text-green-600 mb-3" />}
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
