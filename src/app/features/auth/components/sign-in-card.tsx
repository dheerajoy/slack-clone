import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="pt-0 px-0">
        <CardTitle>Login to Continue</CardTitle>
        <CardDescription>
          Use your email or other Service to Continue
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5">
            <Input
              disabled={false}
              type="email"
              required
              placeholder="Email"
              value=""
              onChange={() => {}}
            />
            <Input
              disabled={false}
              type="password"
              required
              placeholder="Password"
              value=""
              onChange={() => {}}
            />
            <Button
              type="submit"
              variant="default"
              className="w-full"
              size="lg"
            >
              Continue
            </Button>
          </form>

          <Separator />
          <div className="w-full flex flex-col gap-y-2.5">
            <Button
              disabled={false}
              variant="outline"
              size="lg"
              className="w-full relative"
              onClick={() => {}}
            >
              <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
              Continue With Google
            </Button>
            <Button
              disabled={false}
              variant="outline"
              size="lg"
              className="w-full relative"
              onClick={() => {}}
            >
              <FaGithub className="size-5 absolute top-2.5 left-2.5" />
              Continue With GitHub
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
