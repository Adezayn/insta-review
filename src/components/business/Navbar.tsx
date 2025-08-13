import Logo from "../navbar/Logo";
import UserIcon from "../navbar/UserIcon";
import Notifications from "./Notifications";
import ShareableCard from "./ShareableCard";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="px-8 flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8 border-b">
        <Logo />
        <div className="flex gap-4 items-center ">
          <ShareableCard />
          <Notifications />
          <UserIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;