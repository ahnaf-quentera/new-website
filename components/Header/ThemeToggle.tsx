"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// false on the server / first render, true once hydrated on the client
const subscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Avoid a hydration mismatch: the real theme is only known on the client
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`size-4 transition-opacity ${isDark ? "opacity-40" : "opacity-100"}`}
        aria-hidden
      />
      <Switch
        id="theme-toggle"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Moon
        className={`size-4 transition-opacity ${isDark ? "opacity-100" : "opacity-40"}`}
        aria-hidden
      />
      <Label htmlFor="theme-toggle" className="sr-only">
        Dark mode
      </Label>
    </div>
  );
}
