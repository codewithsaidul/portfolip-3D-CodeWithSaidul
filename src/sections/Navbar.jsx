import { useState } from "react";
import ToggleButton from "../assets/menu.svg";
import CloseButton from "../assets/close.svg";
import { navLinks } from "../constants";



// =========================== Navigation Menu Component ===========================
const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/* =========== Logo ======== */}
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            CodeWithSaidul
          </a>
          {/* =========== Logo ======== */}

          {/* =========== Toggle Button ======== */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? CloseButton : ToggleButton}
              alt="Toggle Button CodeWithSaidul"
              className="w-6 h-6"
            />
          </button>
          {/* =========== Toggle Button  ======== */}

          {/* =========== Menu ======== */}
          <div className="hidden sm:flex">
            <NavItems />
          </div>
        </div>
      </nav>


      {/* =========================== Mobile Navigation ============================ */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
            <NavItems />
        </nav>
      </div>
      {/* =========================== Mobile Navigation ============================ */}
    </header>
  );
};

export default Navbar;
