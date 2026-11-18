import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  Dices,
  Gift,
  Globe,
  Handshake,
  Headset,
  MessageSquareMore,
  Mountain,
  Newspaper,
  Puzzle,
  ShieldCheck,
  Trophy,
  Volleyball,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "./ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "cn";

type SidebarLink = {
  label: string;
  href: string;
};

type SidebarItem = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  chevron?: boolean;
  separator?: boolean;
  collapsedOnly?: boolean;
  children?: SidebarLink[];
};

// Hidden when the sidebar is open, shown on the collapsed icon rail
const collapsedOnlyClass = "hidden group-data-[collapsible=icon]:block";

const sidebarTop: SidebarItem[] = [
  { icon: Dices, label: "Casino", active: true, collapsedOnly: true },
  { icon: Volleyball, label: "Sports", collapsedOnly: true },
  {
    icon: Gift,
    label: "Promotions",
    chevron: true,
    children: [
      { label: "Welcome Bonus", href: "/promotions/welcome" },
      { label: "Weekly Reload", href: "/promotions/welcome" },
      { label: "VIP Offers", href: "/promotions/welcome" },
    ],
  },
  { icon: Mountain, label: "VIP Club" },
  { icon: Puzzle, label: "Affiliate" },
  { icon: Trophy, label: "Challenges" },
  { icon: Newspaper, label: "Blog" },
  { icon: MessageSquareMore, label: "Forum", separator: true },
  { icon: Handshake, label: "Sponsorships", chevron: true },
  { icon: ShieldCheck, label: "Responsible Gambling" },
  { icon: Headset, label: "Live Support" },
  { icon: Globe, label: "Language", chevron: true },
];

type SidebarNavItemProps = Omit<SidebarItem, "separator" | "collapsedOnly"> & {
  className?: string;
  buttonClassName?: string;
};

function SidebarNavItem({
  icon: Icon,
  label,
  active,
  children,
  className,
  buttonClassName
}: SidebarNavItemProps) {
  if (children) {
    return (
      <Collapsible
        render={<SidebarMenuItem className={className} />}
        className="group/collapsible"
      >
        <CollapsibleTrigger
          className="w-full"
          render={
            <SidebarMenuButton tooltip={label} className={buttonClassName}>
              <Icon />
              <span>{label}</span>
              <ChevronDown className="text-muted-foreground ml-auto size-3 transition-transform group-data-[collapsible=icon]:hidden in-data-panel-open:rotate-180" />
            </SidebarMenuButton>
          }
        />

        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map((child) => (
              <SidebarMenuSubItem key={child.label}>
                <SidebarMenuSubButton render={<Link href={child.href} />}>
                  {child.label}
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuItem className={className}>
      <SidebarMenuButton isActive={active} tooltip={label} className={buttonClassName}>
        <Icon />
        <span>{label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

const AppSidebar = () => {
  const { state, isMobile } = useSidebar();
  const collapsed = state === "collapsed" && !isMobile;

  const visible = sidebarTop.filter((i) => collapsed || !i.collapsedOnly);
  const firstLabel = visible[0]?.label;
  const lastLabel = visible[visible.length - 1]?.label;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className='flex-row'>
        {/* Desktop toggle (the sidebar itself is an overlay on mobile) */}
        <SidebarTrigger />

        <div className="grid flex-1 items-center min-w-0 grid-cols-2 gap-2 group-data-[collapsible=icon]:hidden pr-4">
          <Button variant="secondary" className="w-full border-0 h-9 bg-[#213545]">Casino</Button>
          <Button variant="secondary" className="w-full border-0 h-9 bg-[#213545]">Sports</Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {sidebarTop.map(({ separator, collapsedOnly, ...item }) => {
            const onlyCollapsed = collapsedOnly ? collapsedOnlyClass : "";

            return (
              <Fragment key={item.label}>
                <SidebarNavItem
                  {...item}
                  className={onlyCollapsed}
                  buttonClassName={cn(
                    "rounded-none",
                    item.label === firstLabel && "rounded-t-md",
                    item.label === lastLabel && "rounded-b-md"
                  )}
                />
                {separator && (
                  <li
                    role="presentation"
                    className={`mx-2 my-2.5 h-px shrink-0 bg-white/30 group-data-[collapsible=icon]:m-0 ${onlyCollapsed}`}
                  />
                )}
              </Fragment>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar;