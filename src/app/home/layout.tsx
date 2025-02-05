
//import ProtectedRoute from "@/components/auth/ProtectedRoute";
// import { AppSidebar } from "@/components/dashboard/AppSidebar";
// import Navbar from "@/components/dashboard/Navbar";
// // import { Separator } from "@/components/ui/separator";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <ProtectedRoute>
    // {children}
    // </ProtectedRoute>
    <div>{children}</div>
  );
}
