import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormCardComponent from "@/components/feature/auth/FormCard";

export default function SignupPage() {
  return (
    <FormCardComponent
      title="Create an account"
      description="Enter your information to create your account"
      action={<Button variant="link">Sign In</Button>}
      form={
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </div>
        </form>
      }
      footer={
        <>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </>
      }
    />
  );
}
