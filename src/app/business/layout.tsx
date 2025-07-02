'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Navbar from "@/components/business/Navbar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, SquareUserRound } from "lucide-react";


export default function Layout({ children }: { children: React.ReactNode }) {
  const items = [
  {
    title: "Home",
    url: "/business",
    icon: Home,
  },
  {
    title: "Reviews",
    url: "/business/reviews",
    icon: SquareUserRound,
  }
];
  return (
    <ProtectedRoute>
      <div className="h-screen">
        <Navbar />
        <div className="flex flex-col">
          <SidebarProvider>
          <AppSidebar items={items}/>
          <main className="w-full bg-gray-50 overflow-y-auto px-6">
            <SidebarTrigger />
            {children}
          </main>
          </SidebarProvider>
        </div>
      </div>
    </ProtectedRoute>
  );
}
