'use client'
import Logo from "../navbar/Logo"
import NavSearch from "./NavSearch"
import Notification from "./Notification"


const Navbar = () => {
  return (
    <div
      className={`ml-[40%] flex items-center justify-between px-4 h-16 fixed top-0 left-0 z-50 bg-white border-b shadow-sm"`}
    >
      <Logo />
      <div className="flex justify-center items-center gap-x-5">
        <NavSearch />
        <Notification />
      </div>
    </div>
  );
};

export default Navbar