"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User } from "lucide-react";

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
import { signInSchema, type SignInValues } from "./schemas";

type SignInModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToRegister: () => void;
  onForgotPassword: () => void;
};

export default function SignInModal({
  open,
  onOpenChange,
  onSwitchToRegister,
  onForgotPassword,
}: SignInModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { identifier: "", password: "" },
  });

  const onSubmit = async (values: SignInValues) => {
    // TODO: call sign in API with `values`
    console.log("sign in", values);
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
            <User className="text-muted-foreground size-5" />
            Sign In
          </DialogTitle>
          <DialogDescription className="text-foreground text-xl font-bold">
            Welcome Back to DinamoBet!
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="signin-identifier">
              Email or Username <span className="text-destructive">*</span>
            </Label>
            <Input
              id="signin-identifier"
              autoComplete="username"
              aria-invalid={!!errors.identifier}
              {...register("identifier")}
              className="h-11"
            />
            {errors.identifier && (
              <p className="text-destructive text-sm">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signin-password">
              Password <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Input
                id="signin-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                {...register("password")}
                className="h-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-destructive text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm font-semibold hover:underline"
          >
            Forgot Password?
          </button>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground"
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </form>

        <p className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-foreground font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
