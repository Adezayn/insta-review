'use client'
import { cn } from "@/lib/utils";
import Logo from "../navbar/Logo"
import { Button } from "../ui/button";
import NavSearch from "./NavSearch"
import Notification from "./Notification"
import Link from "next/link";


const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div
      className={`w-full flex items-center justify-between px-4 h-16 fixed top-0 left-0 z-50 bg-white border-b shadow-sm"`}
    >
      <Logo />
      {/* <nav className="flex justify-center">
        <Button
          variant="link"
          className={cn(
            activeTab === "feed" ? "decoration-red-700" : "",
            "text-black"
          )}
          onClick={() => setActiveTab("feed")}
        >
          Feed
        </Button>
        <Link href={"/feeds"} >Feed</Link>
        <Button
          variant="link"
          className={cn(
            activeTab === "vendors" ? "decoration-red-700" : "",
            "text-black"
          )}
          onClick={() => setActiveTab("vendors")}
        >
          Vendors
        </Button>
      </nav> */}
      <div className="flex justify-center items-center gap-x-5">
        <NavSearch />
        <Notification />
      </div>
    </div>
  );
};

export default Navbar