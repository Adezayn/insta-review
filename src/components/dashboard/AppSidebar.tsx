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
import { LucideIcon } from "lucide-react";
import Logout from "./Logout";

// Menu item
type ItemType =   {
    title: string,
    url: string,
    icon: LucideIcon,
};

type PropType = {
  items: ItemType[],
  className?: string,
  contentStyling?: string
}

export const AppSidebar:React.FC<PropType> = ({items, className, contentStyling}) => {
  const pathname = usePathname();
  return (
    <Sidebar className={className}>
      <SidebarContent className={contentStyling}>
        <SidebarGroup>
          <ViewProfile />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActivePage = pathname === item.url;
                const variant = isActivePage ? "outline" : "default";
                const Icon = item.icon; 
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild variant={variant}>
                      <Link href={item.url}>
                        <Icon />
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
        <Logout />
      </SidebarFooter>
    </Sidebar>
  );
}
