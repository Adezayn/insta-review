import Login from "../auth/Login";
import { Signup } from "../auth/Signup";
import Container from "../global/Container";
// import DarkMode from "./DarkMode";
// import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <nav className="">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <div className="flex gap-4 items-center ">
          <Login />
          <Signup />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar