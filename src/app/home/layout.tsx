import { AppSidebar } from "@/components/dashboard/AppSidebar";
import Navbar from "@/components/dashboard/Navbar";
// import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <SidebarProvider className="mt-16">
        <AppSidebar />
        <main className=" w-full bg-gray-50 overflow-y-auto">{children}</main>
      </SidebarProvider>
    </div>
  );
}
