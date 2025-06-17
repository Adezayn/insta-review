import Container from "../global/Container";
import Logo from "../navbar/Logo";
import UserIcon from "../navbar/UserIcon";
import ExportCsv from "./ExportCsv";


const Navbar = () => {
  return (
    <nav className="">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8 border-b">
        <Logo />
        <div className="flex gap-4 items-center ">
          <ExportCsv />
          <UserIcon />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;