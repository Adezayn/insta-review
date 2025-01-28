import Logo from "../navbar/Logo"
import NavSearch from "./NavSearch"
import Notification from "./Notification"


const Navbar = () => {
  return (
    <div
      className={`w-full flex items-center justify-around  h-16 fixed top-0 left-0 z-50 bg-white border-b shadow-sm"`}
    >
      <Logo />
      <NavSearch />
      <Notification />
    </div>
  );
}

export default Navbar