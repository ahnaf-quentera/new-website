"use client";

import {
  ChevronRight,
  Dices,
  Search,
  TrendingUp,
  Volleyball,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import Header from "@/components/Header/Header";
import AppSidebar from "@/components/AppSidebar";

const socials = [
  { label: "Google", glyph: "G", className: "text-red-400" },
  { label: "Facebook", glyph: "f", className: "text-blue-400" },
  { label: "Kick", glyph: "K", className: "text-green-400" },
];

const games = [
  {
    title: "Private Jet",
    studio: "Paperclip Gaming",
    playing: 158,
    gradient: "from-sky-300 via-sky-400 to-cyan-600",
  },
  {
    title: "Candy Swipe Matchwin",
    studio: "Coreffect Interactive",
    playing: 918,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-700",
  },
  {
    title: "Waylanders Forge",
    studio: "Valkyrie",
    playing: 306,
    gradient: "from-amber-700 via-red-700 to-red-900",
  },
  {
    title: "Gates of Olympus 2500",
    studio: "Pragmatic Play",
    playing: 171,
    gradient: "from-sky-300 via-amber-300 to-amber-500",
  },
  {
    title: "Mahjong Gold Super Scatter",
    studio: "Pragmatic Play",
    playing: 101,
    gradient: "from-rose-600 via-red-700 to-red-900",
  },
  {
    title: "Big Bass Halloween Splash 1000",
    studio: "Pragmatic Play",
    playing: 116,
    gradient: "from-orange-400 via-orange-600 to-red-800",
  },
  {
    title: "Glitch World",
    studio: "Keyframe Gaming",
    playing: 97,
    gradient: "from-cyan-300 via-sky-500 to-blue-700",
  },
  {
    title: "Ares: No Mercy",
    studio: "Titan Gaming",
    playing: 55,
    gradient: "from-orange-500 via-red-600 to-red-900",
  },
];

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      {/* Sidebar: icon rail on desktop, overlay sheet on mobile */}
      <AppSidebar />
      
      {/* SidebarInset renders a <main>, so the page body uses a div */}
      <SidebarInset>
        {/* Top bar */}
        <Header />

        <div className="mx-auto w-full max-w-[calc(1200px+6vw)] px-[3vw] space-y-6 py-3 pb-16">
          {/* Hero */}
          <section className="border-border flex relative overflow-hidden rounded-xl border bg-linear-to-br from-blue-600 via-slate-900 to-slate-950">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 -bottom-10 size-56 rounded-full bg-linear-to-br from-blue-400/60 to-blue-700/10 blur-sm"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-12 size-64 rounded-full bg-linear-to-br from-orange-500/70 to-red-800/20 blur-sm"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/3 bg-[repeating-conic-gradient(var(--foreground)_0_25%,transparent_0_50%)] mask-[linear-gradient(to_bottom_left,black,transparent_70%)] bg-size-[48px_48px] opacity-25 md:block"
            />

            <div className="relative z-10 mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-9 text-center">
              <h1 className="text-3xl leading-tight font-bold text-balance md:text-4xl">
                World&apos;s Largest Online Casino and Sportsbook
              </h1>

              <Button size="lg" className="mt-2 w-full">
                Register
              </Button>

              <p className="text-muted-foreground text-sm font-medium">
                Or Continue With
              </p>

              <div className="grid w-full grid-cols-3 gap-3">
                {socials.map(({ label, glyph, className }) => (
                  <Button
                    key={label}
                    variant="secondary"
                    size="lg"
                    aria-label={`Continue with ${label}`}
                  >
                    <span className={`text-lg font-black ${className}`}>
                      {glyph}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Live stats */}
          <section className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Dices,
                label: "Casino",
                count: "33,489",
                verb: "playing",
              },
              {
                icon: Volleyball,
                label: "Sports",
                count: "12,052",
                verb: "betting",
              },
            ].map(({ icon: Icon, label, count, verb }) => (
              <Card
                key={label}
                className="flex-row items-center justify-between gap-0 px-4 py-4"
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Icon className="text-muted-foreground size-5" />
                  {label}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="size-2 rounded-full bg-green-500" />
                  <span className="font-medium">{count}</span>
                  <span className="text-muted-foreground">{verb}</span>
                </div>
              </Card>
            ))}
          </section>

          {/* Search */}
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-4 size-5 -translate-y-1/2" />
            <Input
              placeholder="Search DinamoBet.com"
              className="h-12 pr-20 pl-12 text-base"
            />
            <Badge
              variant="secondary"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md"
            >
              Cmd + K
            </Badge>
          </div>

          {/* Trending games */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <TrendingUp className="text-muted-foreground size-5" />
              Trending Games
              <ChevronRight className="size-5" />
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {games.map((game) => (
                <div key={game.title} className="space-y-2">
                  <div
                    className={`relative flex aspect-3/4 flex-col justify-end overflow-hidden rounded-lg bg-linear-to-b p-2 text-center ${game.gradient}`}
                  >
                    <span className="bg-background/80 absolute top-1.5 left-1.5 flex size-5 items-center justify-center rounded-full text-[10px] font-black italic">
                      S
                    </span>
                    <p className="text-sm leading-tight font-black text-white uppercase drop-shadow-md">
                      {game.title}
                    </p>
                    <p className="mt-1 text-[8px] tracking-wider text-white/60 uppercase">
                      {game.studio}
                    </p>
                  </div>
                  <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <span className="size-1.5 rounded-full bg-green-500" />
                    <span>
                      <span className="text-foreground font-medium">
                        {game.playing}
                      </span>{" "}
                      playing
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Load more */}
            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <Button variant="ghost" size="sm" className="font-semibold">
                Load More
              </Button>
              <Separator className="flex-1" />
            </div>
          </section>

          {/* Trending sports */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Volleyball className="text-muted-foreground size-5" />
              Trending Sports
              <ChevronRight className="size-5" />
            </h2>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}