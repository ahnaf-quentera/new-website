import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// Placeholder images: swap these for real artwork later
const ph = (text: string, bg: string) =>
  `https://placehold.co/300x400/${bg}/ffffff/png?text=${encodeURIComponent(text)}&font=montserrat`;

type Tile = { title: string; image: string; playing?: number };

export const sports: Tile[] = [
  { title: "Soccer", image: ph("SOCCER", "1d4ed8") },
  { title: "GTA VI", image: ph("GTA VI", "7c3aed") },
  { title: "Basketball", image: ph("BASKETBALL", "1e40af") },
  { title: "Cricket", image: ph("CRICKET", "2563eb") },
  { title: "Tennis", image: ph("TENNIS", "1d4ed8") },
  { title: "American Football", image: ph("AMERICAN\nFOOTBALL", "1e3a8a") },
  { title: "Ice Hockey", image: ph("ICE HOCKEY", "2563eb") },
  { title: "Horse Racing", image: ph("HORSE\nRACING", "1e40af") },
];

export const originals: Tile[] = [
  { title: "Mines", image: ph("MINES", "3b82f6"), playing: 2291 },
  { title: "Dice", image: ph("DICE", "9333ea"), playing: 1902 },
  { title: "Limbo", image: ph("LIMBO", "f59e0b"), playing: 1730 },
  { title: "Plinko", image: ph("PLINKO", "a855f7"), playing: 965 },
  { title: "Blackjack", image: ph("BLACKJACK", "e11d48"), playing: 1077 },
  { title: "Keno", image: ph("KENO", "2563eb"), playing: 1279 },
  { title: "Crash", image: ph("CRASH", "4f46e5"), playing: 1094 },
  { title: "Chicken", image: ph("CHICKEN", "6366f1"), playing: 245 },
];

export const liveCasino: Tile[] = [
  { title: "Blackjack", image: ph("BLACKJACK", "92400e"), playing: 812 },
  { title: "Blackjack VIP", image: ph("BLACKJACK", "be185d"), playing: 431 },
  { title: "Crazy Time", image: ph("CRAZY\nTIME", "0891b2"), playing: 3204 },
  { title: "Roulette", image: ph("ROULETTE", "78350f"), playing: 1520 },
  { title: "Roulette Live", image: ph("ROULETTE", "9f1239"), playing: 988 },
  { title: "Baccarat", image: ph("BACCARAT", "b91c1c"), playing: 674 },
  { title: "Ice Fishing", image: ph("ICE\nFISHING", "0ea5e9"), playing: 2110 },
  { title: "Baccarat Live", image: ph("BACCARAT", "991b1b"), playing: 529 },
];

export function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <h2 className="flex items-center gap-2 font-semibold">
      <Icon className="text-muted-foreground size-5" />
      {title}
      <ChevronRight className="size-5" />
    </h2>
  );
}

export function TileGrid({ items }: { items: Tile[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-8">
      {items.map((item) => (
        <Link key={item.title} href="#" className="group space-y-2">
          <Card className="gap-0 overflow-hidden rounded-lg border-0 p-0 py-0 ring-0 transition-transform duration-200 group-hover:-translate-y-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </Card>
          {item.playing !== undefined && (
            <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <span className="size-1.5 rounded-full bg-green-500" />
              <span>
                <span className="text-foreground font-medium">
                  {item.playing.toLocaleString("en-US")}
                </span>{" "}
                playing
              </span>
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}

export function LoadMore() {
  return (
    <div className="flex items-center gap-4">
      <Separator className="flex-1" />
      <Button variant="ghost" size="sm" className="font-semibold">
        Load More
      </Button>
      <Separator className="flex-1" />
    </div>
  );
}
