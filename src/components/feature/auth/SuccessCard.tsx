import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

import React from "react";

const SuccessCardComponent = ({
  title,
  description,
  extraInfo,
  actions,
}: {
  title: string;
  description: string;
  extraInfo?: string;
  actions?: React.ReactNode;
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
          <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {actions && <CardFooter className="flex-col gap-2">{actions}</CardFooter>}
      {extraInfo && (
        <p className="text-xs text-muted-foreground text-center px-12">
          {extraInfo}
        </p>
      )}
    </Card>
  );
};

export default SuccessCardComponent;
