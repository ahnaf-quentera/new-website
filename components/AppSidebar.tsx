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
  ChevronRight,
  Dices,
  Gift,
  Globe,
  HandCoins,
  Handshake,
  Headset,
  MessageSquareMore,
  Mountain,
  Newspaper,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  Trophy,
  Volleyball,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Button } from "./ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "cn";

type SidebarLink = {
  icon?: LucideIcon;
  label: string;
  href: string;
};

type SidebarItem = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  chevron?: boolean; // shows the small right arrow on the collapsed rail
  separator?: boolean; // adds a line after this item
  collapsedOnly?: boolean; // only shows on the collapsed rail (Casino / Sports)
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
      { icon: Gift, label: "Welcome Bonus", href: "#" },
      { icon: RefreshCw, label: "Weekly Reload", href: "#" },
      { icon: HandCoins, label: "VIP Offers", href: "#" },
    ],
  },
  { icon: Mountain, label: "VIP Club" },
  { icon: Puzzle, label: "Affiliate" },
  { icon: Trophy, label: "Challenges" },
  { icon: Newspaper, label: "Blog" },
  { icon: MessageSquareMore, label: "Forum", separator: true },
  { icon: Handshake, label: "Sponsorships" },
  { icon: ShieldCheck, label: "Responsible Gambling" },
  { icon: Headset, label: "Live Support" },
  { icon: Globe, label: "Language" },
];

// Small right arrow, only on the collapsed rail.
// It sits next to the button (not inside it) because the button has overflow-hidden.
// Anchored from the left (44px button - 12px arrow) so it stays on the button while
// the sidebar width animates; `right-0` slid in from the far edge of the wide li.
function CollapsedArrow() {
  return (
    <ChevronRight
      aria-hidden
      className="pointer-events-none absolute top-1/2 left-8 hidden size-3 -translate-y-1/2 text-icon-color group-hover/menu-item:text-sidebar-accent-foreground group-data-[collapsible=icon]:block"
    />
  );
}

type SidebarNavItemProps = Omit<SidebarItem, "separator" | "collapsedOnly"> & {
  className?: string;
  buttonClassName?: string;
};

function SidebarNavItem({
  icon: Icon,
  label,
  active,
  chevron,
  children,
  className,
  buttonClassName,
}: SidebarNavItemProps) {
  const { state, isMobile, setOpen: setSidebarOpen } = useSidebar();
  const [itemOpen, setItemOpen] = useState(false);
  const collapsed = state === "collapsed" && !isMobile;

  if (children) {
    return (
      <Collapsible
        render={<SidebarMenuItem className={className} />}
        className="group/collapsible"
        open={itemOpen}
        onOpenChange={(next) => {
          if (collapsed) {
            // Collapsed rail: expand the sidebar and show the options
            setSidebarOpen(true);
            setItemOpen(true);
          } else {
            setItemOpen(next);
          }
        }}
      >
        <CollapsibleTrigger
          className="w-full"
          render={
            <SidebarMenuButton tooltip={label} className={buttonClassName}>
              <Icon />
              <span>{label}</span>
              <ChevronDown className="ml-auto size-4! text-icon-color transition-transform group-hover/menu-button:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden in-data-panel-open:rotate-180" />
            </SidebarMenuButton>
          }
        />

        <CollapsedArrow />

        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map(({ icon: ChildIcon, label: childLabel, href }) => (
              <SidebarMenuSubItem key={childLabel}>
                <SidebarMenuSubButton render={<Link href={href} />}>
                  {ChildIcon && <ChildIcon />}
                  <span>{childLabel}</span>
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
      <SidebarMenuButton
        isActive={active}
        tooltip={label}
        className={buttonClassName}
      >
        <Icon />
        <span>{label}</span>
      </SidebarMenuButton>
      {chevron && <CollapsedArrow />}
    </SidebarMenuItem>
  );
}

const AppSidebar = () => {
  const { state, isMobile } = useSidebar();
  const collapsed = state === "collapsed" && !isMobile;

  // First / last item actually on screen (Casino & Sports are hidden when open)
  const visible = sidebarTop.filter((i) => collapsed || !i.collapsedOnly);
  const firstLabel = visible[0]?.label;
  const lastLabel = visible[visible.length - 1]?.label;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className='flex-row'>
        {/* Desktop toggle (the sidebar itself is an overlay on mobile) */}
        <SidebarTrigger />

        <div className="grid flex-1 items-center min-w-0 grid-cols-2 gap-2 group-data-[collapsible=icon]:hidden pr-4">
          <Button variant="secondary" className="w-full border-0 h-9 bg-icon-tile">Casino</Button>
          <Button variant="secondary" className="w-full border-0 h-9 bg-icon-tile">Sports</Button>
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
                    // Open: one block with rounded top & bottom
                    "rounded-none",
                    item.label === firstLabel && "rounded-t-md",
                    item.label === lastLabel && "rounded-b-md",
                    // Collapsed: Casino / Sports get the same tile as the header buttons
                    collapsedOnly && "group-data-[collapsible=icon]:bg-icon-tile"
                  )}
                />
                {separator && (
                  <li
                    role="presentation"
                    className={cn(
                      "mx-2 my-2.5 h-px shrink-0 bg-sidebar-border group-data-[collapsible=icon]:mx-1 group-data-[collapsible=icon]:my-2",
                      onlyCollapsed
                    )}
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