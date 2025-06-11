'use client'

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

// Menu item

export const AppSidebar = ({items}) => {
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
