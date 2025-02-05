'use client'
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import FeedsPage from "@/components/dashboard/FeedsPage";
import Navbar from "@/components/dashboard/Navbar";
import VendorsPage from "@/components/dashboard/VendorsPage";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";


const HomePage = () => {
  const [activeTab, setActiveTab] = useState("feed");
  return (
    <div className="flex flex-col h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarProvider className="mt-16">
        <AppSidebar />
        <main className=" w-full bg-gray-50 overflow-y-auto">
          <div className="w-full">
            {activeTab === "feed" &&  <FeedsPage />}
            {activeTab === "vendors" && <VendorsPage />}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default HomePage;