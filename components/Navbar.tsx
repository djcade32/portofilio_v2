import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import Button from "./core/Button";

const NAV_ITEMS = ["About", "Tech Stack", "Projects", "Experience", "Contact"];

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"}>
          <Image src={"/NC_logo.png"} alt="NC logo" width={32} height={36} />
        </Link>
        <ul className="hidden md:flex flex-row items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item} title={item} />
          ))}
        </ul>

        <Button>Resume</Button>
      </nav>
    </header>
  );
};

export default Navbar;
