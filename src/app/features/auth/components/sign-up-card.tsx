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
import { signInFlow } from "../types";
import { useState } from "react";

interface SignUpCardProps {
  setState: (state: signInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="pt-0 px-0">
        <CardTitle>Sign Up to Continue</CardTitle>
        <CardDescription>
          Use your email or other Service to Continue
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5">
            <Input
              disabled={false}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              disabled={false}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              disabled={false}
              type="Confirm password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
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
          <p className="text-xs text-muted-foreground">
            Already have an Account?
            <span
              onClick={() => setState("signIn")}
              className="text-sky-700 cursor-pointer hover:underline pl-1"
            >
              Sign In
            </span>
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
