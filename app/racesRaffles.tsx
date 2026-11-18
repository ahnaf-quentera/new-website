/* ---------- Races & Raffles ---------- */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

export function CountdownRing({
  initialSeconds,
  totalSeconds,
}: {
  initialSeconds: number;
  totalSeconds: number;
}) {
  const [left, setLeft] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const r = 44;
  const c = 2 * Math.PI * r;
  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  const parts: [number, string][] =
    d > 0
      ? [[d, "d"]]
      : h > 0
        ? [
            [h, "h"],
            [m, "m"],
          ]
        : [
            [m, "m"],
            [s, "s"],
          ];

  return (
    <div className="relative size-24 shrink-0 sm:size-28">
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          strokeWidth="6"
          className="stroke-background"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - left / totalSeconds)}
          className="stroke-primary transition-[stroke-dashoffset] duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-muted-foreground text-xs font-medium">
          Ends in
        </span>
        <span className="text-lg font-bold tabular-nums">
          {parts.map(([v, u], i) => (
            <Fragment key={u}>
              {i > 0 && " "}
              {v}
              <span className="text-xs">{u}</span>
            </Fragment>
          ))}
        </span>
      </div>
    </div>
  );
}

export function InfoTip({ text }: { text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground rounded-full"
            aria-label="More info"
          />
        }
      >
        <Info />
      </TooltipTrigger>
      <TooltipContent>{text}</TooltipContent>
    </Tooltip>
  );
}

export function PromoCard({
  title,
  description,
  action,
  info,
  ring,
  footer,
}: {
  title: string;
  description: string;
  action: React.ReactNode;
  info: string;
  ring: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <Card className="gap-0 py-0">
      <CardContent className="flex items-center justify-between gap-4 p-5">
        <div className="min-w-0 space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex items-center gap-2 pt-4">
            {action}
            <InfoTip text={info} />
          </div>
        </div>
        {ring}
      </CardContent>
      <CardFooter className="gap-3 border-t px-5 py-4">{footer}</CardFooter>
    </Card>
  );
}
