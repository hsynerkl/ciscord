import Logo from "@/app/assets/icons/Logo";
import NavLinks from "@/app/welcome/particles/NavLinks";
import Login from "./Login";

const Navbar = () => {
  return (
    <nav className="flex h-20 items-center justify-between">
      <div className="text-white cursor-pointer">
        <Logo />
      </div>
      <NavLinks />
      <Login />
    </nav>
  );
};

export default Navbar;
