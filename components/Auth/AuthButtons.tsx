"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import ForgotPasswordModal from "./ForgotPasswordModal";
import RegisterModal from "./RegisterModal";
import SignInModal from "./SignInModal";
import { useIsMobile } from "@/hooks/use-mobile";


export type Modal = "signin" | "register" | "forgot" | null;

export default function AuthButtons() {
  const [modal, setModal] = useState<Modal>(null);
  const isMobile = useIsMobile();

  return (
    <>
      <Button
        className="text-sm"
        variant="secondary"
        onClick={() => setModal("signin")}
      >
        Sign In
      </Button>
      {!isMobile && (
        <Button className="text-sm" onClick={() => setModal("register")}>
          Register
        </Button>
      )}

      <SignInModal
        open={modal === "signin"}
        onOpenChange={(open) => setModal(open ? "signin" : null)}
        onSwitchToRegister={() => setModal("register")}
        onForgotPassword={() => setModal("forgot")}
      />
      <RegisterModal
        open={modal === "register"}
        onOpenChange={(open) => setModal(open ? "register" : null)}
        onSwitchToSignIn={() => setModal("signin")}
      />
      <ForgotPasswordModal
        open={modal === "forgot"}
        onOpenChange={(open) => setModal(open ? "forgot" : null)}
        onSwitchToSignIn={() => setModal("signin")}
      />
    </>
  );
}
