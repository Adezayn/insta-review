'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Home, Inbox } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const items = [
  {
    title: "Home",
    url: "/business",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/business/inbox",
    icon: Inbox,
  }
];
  return (
    <ProtectedRoute>
      <div className="flex flex-col h-screen">
        {/* <Navbar /> */}
        <SidebarProvider>
          <AppSidebar items={items}/>
          <main className=" w-full bg-gray-50 overflow-y-auto">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </ProtectedRoute>
  );
}
