"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { KeyRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPasswordSchema, type ForgotPasswordValues } from "./schemas";

type ForgotPasswordModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignIn: () => void;
};

export default function ForgotPasswordModal({
  open,
  onOpenChange,
  onSwitchToSignIn,
}: ForgotPasswordModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: ForgotPasswordValues) => {
    // TODO: call the "send password reset email" API with `values.email`
    // await fetch("/api/auth/forgot-password", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    console.log("forgot password", values);
    reset();
    onOpenChange(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] gap-5 overflow-y-auto p-6 sm:max-w-md">
        <DialogHeader className="gap-4">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <KeyRound className="text-muted-foreground size-5" />
            Forgot Password
          </DialogTitle>
          <DialogDescription className="text-foreground text-xl font-bold">
            Change Your Password
          </DialogDescription>
          <p className="text-muted-foreground text-sm">
            Enter the email linked to your account and we&apos;ll send you a
            link to reset your password.
          </p>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="forgot-email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="forgot-email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              className="h-11"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground"
            disabled={isSubmitting}
          >
            Send Email
          </Button>
        </form>

        <p className="text-muted-foreground text-center text-sm">
          Remembered your password?{" "}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="text-foreground font-semibold hover:underline"
          >
            Sign In
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
