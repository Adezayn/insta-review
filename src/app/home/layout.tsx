'use client'
//import ProtectedRoute from "@/components/auth/ProtectedRoute";
// import { AppSidebar } from "@/components/dashboard/AppSidebar";
import Navbar from "@/components/dashboard/Navbar";
import { Home, Inbox, SquareUserRound } from "lucide-react";

import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
  }
];
  return (
    <div className="flex flex-col h-screen">
        <SidebarProvider className="">
          <AppSidebar items={items}/>
          <main className="w-full bg-gray-50 overflow-y-auto">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
    </div>
  );
}
