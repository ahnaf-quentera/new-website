"use client";

import Link from "next/link";
import {
  AtSign,
  BadgeCheck,
  Camera,
  Gamepad2,
  MessageSquareMore,
  Music,
  Newspaper,
  Send,
  ShieldCheck,
  ShoppingCart,
  SquareArrowOutUpRight,
  TvMinimalPlay,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COPYRIGHT_YEAR = 2026;
type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Casino",
    links: [
      { label: "Casino Games", href: "#" },
      { label: "Slots", href: "#" },
      { label: "Live Casino", href: "#" },
      { label: "Roulette", href: "#" },
      { label: "Blackjack", href: "#" },
      { label: "Poker", href: "#" },
      { label: "Publishers", href: "#" },
      { label: "Promos & Competitions", href: "#" },
      { label: "DinamoBet Engine", href: "#", external: true },
      { label: "DinamoBet Vendors", href: "#", external: true },
    ],
  },
  {
    title: "Sports",
    links: [
      { label: "Sportsbook", href: "#" },
      { label: "Live Sports", href: "#" },
      { label: "Soccer", href: "#" },
      { label: "Basketball", href: "#" },
      { label: "Tennis", href: "#" },
      { label: "Esports", href: "#" },
      { label: "Bet Bonuses", href: "#" },
      { label: "Sports Rules", href: "#" },
      { label: "Racing Rules", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#", external: true },
      { label: "Fairness", href: "#" },
      { label: "Responsible Gambling", href: "#" },
      { label: "Gambling Helpline", href: "#", external: true },
      { label: "Live Support", href: "#" },
      { label: "Self Exclusion", href: "#" },
      { label: "Law Enforcement Request", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "VIP Club", href: "#" },
      { label: "Affiliate", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "Payment Info",
    links: [
      { label: "Deposit & Withdrawals", href: "#" },
      { label: "Currency Guide", href: "#" },
      { label: "Crypto Guide", href: "#" },
      { label: "Supported Crypto", href: "#" },
      { label: "How to Use the Vault", href: "#" },
      { label: "How Much to Bet With", href: "#" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { label: "How-to Guides", href: "#" },
      { label: "Online Casino Guide", href: "#" },
      { label: "Sports Betting Guide", href: "#" },
      { label: "How to Live Stream Sports", href: "#" },
      { label: "DinamoBet VIP Guide", href: "#" },
      { label: "House Edge Guide", href: "#" },
    ],
  },
];

const socials = [
  { label: "Blog", icon: Newspaper, href: "#" },
  { label: "Forum", icon: MessageSquareMore, href: "#" },
  { label: "Facebook", icon: Users, href: "#" },
  { label: "X", icon: AtSign, href: "#" },
  { label: "Instagram", icon: Camera, href: "#" },
  { label: "YouTube", icon: TvMinimalPlay, href: "#" },
  { label: "TikTok", icon: Music, href: "#" },
  { label: "Telegram", icon: Send, href: "#" },
  { label: "Discord", icon: Gamepad2, href: "#" },
  { label: "Shop", icon: ShoppingCart, href: "#" },
];

// Placeholder trust badges: replace with your real licence/certification seals
const badges = [
  { label: "Licensed Operator", icon: ShieldCheck },
  { label: "Provably Fair", icon: BadgeCheck },
  { label: "18+ Only", icon: null },
];

const languages = [
  { label: "English", value: "en" },
  { label: "العربية", value: "ar" },
  { label: "Español", value: "es" },
  { label: "Português", value: "pt" },
  { label: "Türkçe", value: "tr" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-background border-t">
      <div className="mx-auto w-full max-w-[calc(1200px+6vw)] space-y-10 px-[3vw] py-12">
        {/* Link columns */}
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-semibold">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                    >
                      {link.label}
                      {link.external && (
                        <SquareArrowOutUpRight className="size-3.5" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-1">
          {socials.map(({ label, icon: Icon, href }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              aria-label={label}
              nativeButton={false}
              className="text-muted-foreground hover:text-foreground"
              render={<Link href={href} />}
            >
              <Icon className="size-4" />
            </Button>
          ))}
        </div>

        <Separator />

        {/* Bottom block */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {COPYRIGHT_YEAR} DinamoBet.com | All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {badges.map(({ label, icon: Icon }) => (
              <Badge
                key={label}
                variant="outline"
                className="h-10 gap-2 rounded-lg px-4 text-sm font-semibold"
              >
                {Icon ? (
                  <>
                    <Icon className="size-5!" />
                    {label}
                  </>
                ) : (
                  <span className="font-black">18+</span>
                )}
              </Badge>
            ))}
          </div>

          <div className="text-muted-foreground max-w-4xl space-y-4 text-sm leading-relaxed">
            <p>
              DinamoBet is owned and operated by [Company Name], registration
              number: [000000], registered address: [Registered Address].
              Contact us at{" "}
              <a
                href="mailto:support@dinamobet.com"
                className="text-foreground hover:underline"
              >
                support@dinamobet.com
              </a>
              .
            </p>
            <p>
              DinamoBet is committed to responsible gambling, for more
              information visit{" "}
              <a
                href="https://www.gamblingtherapy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                Gamblingtherapy.org
              </a>
            </p>
          </div>

          <p className="text-muted-foreground text-sm">1 USDT = $1.00</p>

          <Select items={languages} defaultValue="en">
            <SelectTrigger className="h-11 min-w-36 font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Link href="/" aria-label="DinamoBet home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/light-logo.png"
              alt="DinamoBet"
              className="light-only w-32 cursor-pointer object-contain lg:w-40"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
