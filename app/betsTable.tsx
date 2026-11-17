import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Cherry, CircleDot, Star, VenetianMask, Volleyball } from "lucide-react";

/* ---------- Bets table ---------- */
type Currency = "btc" | "usdc" | "myr" | "brl";

const currencies: Record<Currency, { prefix: string; glyph: string; className: string }> = {
  btc: { prefix: "$", glyph: "₿", className: "bg-orange-500" },
  usdc: { prefix: "$", glyph: "$", className: "bg-blue-500" },
  myr: { prefix: "MYR ", glyph: "MY", className: "bg-red-600" },
  brl: { prefix: "R$", glyph: "BR", className: "bg-green-600" },
};

export function Money({ amount, currency, className = "" }: { amount: number; currency: Currency; className?: string }) {
  const c = currencies[currency];
  return (
    <span className={`inline-flex items-center justify-end gap-1.5 tabular-nums ${className}`}>
      {amount < 0 && "-"}
      {c.prefix}
      {Math.abs(amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      <span className={`flex size-4 items-center justify-center rounded-full text-[7px] font-bold text-white ${c.className}`}>
        {c.glyph}
      </span>
    </span>
  );
}

type Bet = {
  game: string;
  icon: React.ElementType;
  user?: string; // undefined = hidden
  time: string;
  bet: number;
  currency: Currency;
  multiplier: number;
  payout: number;
};

export const casinoBets: Bet[] = [
  { game: "Graffiti Ways", icon: Cherry, time: "4:28 PM", bet: 1000.65, currency: "btc", multiplier: 0, payout: -1000.65 },
  { game: "Sweet Rush Bonanza", icon: Cherry, time: "4:28 PM", bet: 5600, currency: "usdc", multiplier: 0, payout: -5600 },
  { game: "Sweet Rush Bonanza", icon: Cherry, time: "4:28 PM", bet: 5600, currency: "usdc", multiplier: 0.93, payout: -420 },
  { game: "Roulette", icon: CircleDot, time: "4:28 PM", bet: 4176.08, currency: "myr", multiplier: 0, payout: -4176.08 },
  { game: "Graffiti Ways", icon: Cherry, time: "4:27 PM", bet: 1000.65, currency: "btc", multiplier: 0, payout: -1000.65 },
  { game: "Scarab Spin", icon: Cherry, user: "PauloBarbara", time: "4:27 PM", bet: 200, currency: "brl", multiplier: 36, payout: 7200 },
  { game: "Graffiti Ways", icon: Cherry, time: "4:27 PM", bet: 1000.65, currency: "btc", multiplier: 0, payout: -1000.65 },
];

export const sportsBets: Bet[] = [
  { game: "Real Madrid vs Barcelona", icon: Volleyball, user: "GoalHunter", time: "4:26 PM", bet: 2500, currency: "usdc", multiplier: 2.15, payout: 5375 },
  { game: "Lakers vs Celtics", icon: Volleyball, time: "4:25 PM", bet: 800, currency: "btc", multiplier: 0, payout: -800 },
  { game: "Djokovic vs Alcaraz", icon: Volleyball, user: "AceBettor", time: "4:24 PM", bet: 1200, currency: "brl", multiplier: 1.72, payout: 2064 },
  { game: "India vs Australia", icon: Volleyball, time: "4:22 PM", bet: 3000, currency: "myr", multiplier: 0, payout: -3000 },
];

export const raceLeaderboard = [
  { user: "HighRoller88", wagered: 1284500.12, prize: 25000 },
  { user: "LuckyLuna", wagered: 980230.5, prize: 15000 },
  { user: "PauloBarbara", wagered: 745100, prize: 10000 },
  { user: "Hidden", wagered: 510880.4, prize: 7500 },
  { user: "CryptoKing", wagered: 402300.75, prize: 5000 },
];

export function UserCell({ user }: { user?: string }) {
  return user ? (
    <span className="flex items-center gap-1.5 font-medium">
      <Star className="size-4 text-teal-400" />
      {user}
    </span>
  ) : (
    <span className="text-muted-foreground flex items-center gap-1.5">
      <VenetianMask className="size-4" />
      Hidden
    </span>
  );
}

const headerClass =
  "bg-muted/50 [&_tr]:border-0 [&_th]:h-12 [&_th]:px-4 [&_th:first-child]:rounded-l-lg [&_th:last-child]:rounded-r-lg";

export function BetsTable({ rows }: { rows: Bet[] }) {
  return (
    <Table>
      <TableHeader className={headerClass}>
        <TableRow>
          <TableHead>Game</TableHead>
          <TableHead className="hidden sm:table-cell">User</TableHead>
          <TableHead className="hidden text-right md:table-cell">Time</TableHead>
          <TableHead className="hidden text-right md:table-cell">Bet Amount</TableHead>
          <TableHead className="hidden text-right lg:table-cell">Multiplier</TableHead>
          <TableHead className="text-right">Payout</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&_td]:h-14 [&_td]:px-4">
        {rows.map((b, i) => (
          <TableRow key={i}>
            <TableCell>
              <span className="flex items-center gap-2 font-medium">
                <b.icon className="text-muted-foreground size-4 shrink-0" />
                <span className="max-w-40 truncate">{b.game}</span>
              </span>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <UserCell user={b.user} />
            </TableCell>
            <TableCell className="text-muted-foreground hidden text-right md:table-cell">{b.time}</TableCell>
            <TableCell className="hidden text-right md:table-cell">
              <Money amount={b.bet} currency={b.currency} className="text-muted-foreground" />
            </TableCell>
            <TableCell className="text-muted-foreground hidden text-right tabular-nums lg:table-cell">
              {b.multiplier.toFixed(2)}×
            </TableCell>
            <TableCell className="text-right">
              <Money
                amount={b.payout}
                currency={b.currency}
                className={b.payout > 0 ? "font-medium text-green-500" : "text-muted-foreground"}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function LeaderboardTable() {
  return (
    <Table>
      <TableHeader className={headerClass}>
        <TableRow>
          <TableHead className="w-20">Rank</TableHead>
          <TableHead>User</TableHead>
          <TableHead className="text-right">Wagered</TableHead>
          <TableHead className="text-right">Prize</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&_td]:h-14 [&_td]:px-4">
        {raceLeaderboard.map((r, i) => (
          <TableRow key={i}>
            <TableCell>
              <Badge variant={i < 3 ? "default" : "secondary"} className="rounded-full tabular-nums">
                #{i + 1}
              </Badge>
            </TableCell>
            <TableCell>
              <UserCell user={r.user === "Hidden" ? undefined : r.user} />
            </TableCell>
            <TableCell className="text-right">
              <Money amount={r.wagered} currency="usdc" className="text-muted-foreground" />
            </TableCell>
            <TableCell className="text-right">
              <Money amount={r.prize} currency="usdc" className="font-medium text-green-500" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}