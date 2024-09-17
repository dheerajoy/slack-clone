"use client";
import { useState } from "react";
import { signInFlow } from "../types";
import { SignUpCard } from "./sign-up-card";
import { SignInCard } from "./sign-in-card";

export const AuthScreen = () => {
  const [state, setState] = useState<signInFlow>("signIn");

  return (
    <div className="h-full flex items-center justify-center bg-[#f7a955]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
