'use client'
import Navbar from "@/components/dashboard/Navbar";
import VendorsPage from "@/components/dashboard/VendorsPage";
import FeedReviewGrid from "@/components/review/FeedReviewGrid";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";


const HomePage = () => {
 // const [activeTab, setActiveTab] = useState("feed");
  return (
       <main className="w-full bg-gray-50 overflow-y-auto">
         {/* <Navbar /> */}
          <div className="w-full">
              <p>This HomePage</p>
          </div>
        </main>
  );
}

export default HomePage;