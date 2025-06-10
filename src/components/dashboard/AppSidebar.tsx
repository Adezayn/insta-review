'use client'
import { Calendar, Home, Inbox, SquareUserRound, Star} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";
import Link from "next/link";
import ViewProfile from "./ViewProfile";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Vendors",
    url: "/vendors",
    icon: SquareUserRound,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  }
];

export const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="pt-16">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActivePage = pathname === item.url;
                const variant = isActivePage ? "outline" : "default";
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild variant={variant}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ViewProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
