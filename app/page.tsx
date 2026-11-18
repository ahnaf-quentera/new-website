"use client";

import {
  ChevronRight,
  Dices,
  Search,
  TrendingUp,
  Volleyball,
  Flame,
  Tv,
  Timer,
  Ticket,
  Trophy,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header/Header";
import Image from "next/image";
import {
  liveCasino,
  LoadMore,
  originals,
  SectionHeader,
  sports,
  TileGrid,
} from "./imageRender";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BetsTable,
  casinoBets,
  LeaderboardTable,
  sportsBets,
} from "./betsTable";
import { CountdownRing, PromoCard } from "./racesRaffles";
import Footer from "@/components/Footer/Footer";
import AppSidebar from "@/components/AppSidebar";
import { useState } from "react";
import { Modal } from "@/components/Auth/AuthButtons";
import RegisterModal from "@/components/Auth/RegisterModal";
import SignInModal from "@/components/Auth/SignInModal";
import ForgotPasswordModal from "@/components/Auth/ForgotPasswordModal";

// const socials = [
//   { label: "Google", glyph: "G", className: "text-red-400" },
//   { label: "Facebook", glyph: "f", className: "text-blue-400" },
//   { label: "Kick", glyph: "K", className: "text-green-400" },
// ];

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
  const [modal, setModal] = useState<Modal>(null);
  return (
    <SidebarProvider defaultOpen={false}>
      {/* Sidebar: icon rail on desktop, overlay sheet on mobile */}
      <AppSidebar />

      {/* SidebarInset renders a <main>, so the page body uses a div */}
      <SidebarInset>
        {/* Top bar */}
        <Header />

        <div className="mx-auto w-full max-w-[calc(1200px+6vw)] px-[3vw] space-y-3 py-3 pb-8">
          {/* Hero */}
          <section className="border-border flex justify-center relative overflow-hidden rounded-xl border bg-linear-to-br p-12">
            {/* Mobile */}
            <Image
              src="/banner-mobile.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="pointer-events-none object-cover object-top md:hidden"
            />

            {/* Desktop */}
            <Image
              src="/banner-desktop-centered.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="pointer-events-none hidden object-cover md:block"
            />

            <div className="relative z-5 mx-auto flex w-full max-w-[350px] flex-col items-center gap-4 px-6 pt-[55vw] pb-6 text-center md:mx-0 md:w-auto md:pt-3 md:pb-3">
              <h1 className="text-lg leading-tight font-bold text-balance md:text-3xl">
                World&apos;s Largest Online Casino and Sportsbook
              </h1>

              <Button
                onClick={() => setModal("register")}
                size="lg"
                className="mt-2 w-full"
              >
                Register
              </Button>

              {/* <p className=" text-sm font-medium">Or Continue With</p> */}

              {/* <div className="grid w-full grid-cols-3 gap-3">
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
              </div> */}
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
              className="bg-primary text-primary-foreground absolute top-1/2 right-3 -translate-y-1/2 rounded-md"
            >
              Cmd + K
            </Badge>
          </div>

          {/* Trending games */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 font-semibold">
              <TrendingUp className="text-muted-foreground size-5" />
              Trending Games
              <ChevronRight className="size-5" />
            </h2>

            <div className="grid grid-cols-5 gap-3 sm:grid-cols-6 lg:grid-cols-8">
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
          <section className="space-y-4">
            <SectionHeader icon={Volleyball} title="Trending Sports" />
            <TileGrid items={sports} />
            <LoadMore />
          </section>

          {/* Originals */}
          <section className="space-y-4">
            <SectionHeader icon={Flame} title="DinamoBet Originals" />
            <TileGrid items={originals} />
            <LoadMore />
          </section>

          {/* Live casino */}
          <section className="space-y-4">
            <SectionHeader icon={Tv} title="Live Casino" />
            <TileGrid items={liveCasino} />
            <LoadMore />
          </section>

          {/* Races & Raffles */}
          <section className="space-y-4 pt-4">
            <h2 className="flex items-center gap-2 font-semibold">
              <Timer className="text-muted-foreground size-5" />
              Races &amp; Raffles
            </h2>

            <div className="grid gap-3 md:grid-cols-2">
              <PromoCard
                title="$100k Race"
                description="Ready to race to the top?"
                action={
                  <Button variant="secondary" size="lg">
                    Leaderboard
                  </Button>
                }
                info="Wager on any game to climb the leaderboard. Top 5,000 players win a share of the prize pool."
                ring={
                  <CountdownRing
                    initialSeconds={40 * 60 + 58}
                    totalSeconds={60 * 60}
                  />
                }
                footer={
                  <>
                    <Trophy className="text-muted-foreground size-4" />
                    <span className="text-sm font-medium">Not entered yet</span>
                  </>
                }
              />
              <PromoCard
                title="$75k Weekly Raffle"
                description="Finish your week with a win!"
                action={
                  <Button variant="secondary" size="lg">
                    0 Tickets
                  </Button>
                }
                info="Earn 1 ticket for every $1,000 wagered. Winners are drawn every week."
                ring={
                  <CountdownRing
                    initialSeconds={4 * 86400}
                    totalSeconds={7 * 86400}
                  />
                }
                footer={
                  <>
                    <Ticket className="text-muted-foreground size-4 shrink-0" />
                    <Progress value={0} className="flex-1" />
                    <span className="text-sm font-medium tabular-nums">0%</span>
                  </>
                }
              />
            </div>
          </section>

          {/* Bets */}
          <section className="pt-4">
            <Tabs defaultValue="casino" className="gap-6">
              <TabsList className="group-data-horizontal/tabs:h-auto max-w-full gap-2 overflow-x-auto rounded-full bg-black/30 p-2">
                <TabsTrigger
                  value="casino"
                  className="h-auto flex-none rounded-full px-6 py-3 text-base font-semibold text-white/90 data-active:bg-secondary data-active:text-white dark:data-active:border-transparent dark:data-active:bg-secondary"
                >
                  Casino Bets
                </TabsTrigger>
                <TabsTrigger
                  value="sports"
                  className="h-auto flex-none rounded-full px-6 py-3 text-base font-semibold text-white/90 data-active:bg-secondary data-active:text-white dark:data-active:border-transparent dark:data-active:bg-secondary"
                >
                  Sports Bets
                </TabsTrigger>
                <TabsTrigger
                  value="race"
                  className="h-auto flex-none rounded-full px-6 py-3 text-base font-semibold text-white/90 data-active:bg-secondary data-active:text-white dark:data-active:border-transparent dark:data-active:bg-secondary"
                >
                  Race Leaderboard
                </TabsTrigger>
              </TabsList>
              <TabsContent value="casino">
                <BetsTable rows={casinoBets} />
              </TabsContent>
              <TabsContent value="sports">
                <BetsTable rows={sportsBets} />
              </TabsContent>
              <TabsContent value="race">
                <LeaderboardTable />
              </TabsContent>
            </Tabs>
          </section>
        </div>
        <Footer />
      </SidebarInset>
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
    </SidebarProvider>
  );
}
