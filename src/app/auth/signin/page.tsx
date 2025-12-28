import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormCardComponent from "@/components/feature/auth/FormCard";

export default function SigninPage() {
  return (
    <FormCardComponent
      title="Login to your account"
      description="Enter your email below to login to your account"
      action={<Button variant="link">Sign Up</Button>}
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      }
      footer={
        <>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </>
      }
    />
  );
}
