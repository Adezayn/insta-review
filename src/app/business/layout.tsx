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
        <SidebarProvider>
            <AppSidebar items={items} className="h-[calc(100vh-89px)] mt-[89px]" contentStyling="pt-8"/>
            <main className="w-full overflow-y-auto px-6 mt-[89px] pt-12 md:pt-8">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
      </div>
    </ProtectedRoute>
  );
}
