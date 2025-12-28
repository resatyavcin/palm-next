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
  footer?: React.ReactNode | null;
  logo?: React.ReactNode | string;
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-3">
          {logo && <Palmtree className="text-green-600" />}
          {action && <div className="shrink-0">{action}</div>}
        </div>
        <CardTitle className="col-span-full">{title}</CardTitle>
        <CardDescription className="col-span-full">
          {description}
        </CardDescription>
      </CardHeader>
      {form}
    </Card>
  );
};

export default FormCardComponent;
