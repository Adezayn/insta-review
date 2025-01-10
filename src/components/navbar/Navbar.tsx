import Container from "../global/Container";
import { Button } from "../ui/button";
// import DarkMode from "./DarkMode";
// import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";


const Navbar = () => {
  return (
    <nav className="border-b ">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center ">
          {/* <DarkMode />
          <LinksDropdown /> */}
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar