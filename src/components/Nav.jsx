import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ onOpenQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="w-full bg-white shadow-md text-black relative z-50">
      <nav className="w-full bg-white shadow-sm  text-black relative z-50">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/frame.png"
              alt="Logo"
              className="h-6 sm:h-7 md:h-8 cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              {" "}
              <HashLink
                smooth
                to="/#experience"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                Experience{" "}
              </HashLink>{" "}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Desktop Send Query */}
          <button
            onClick={onOpenQuery}
            className="hidden md:flex items-center gap-2 text-lg font-medium underline underline-offset-2"
          >
            Send Query
            <Icon icon="oi:arrow-right" className="w-5 h-5" />
          </button>

          {/* Mobile Hamburger (RIGHT SIDE) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-9 h-9 flex items-center justify-center"
          >
            <Icon icon="mdi:menu" className="w-6 h-6" />
          </button>
        </div>

        {/* OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
  ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`
    fixed top-0 right-0 h-full w-[260px] bg-white shadow-xl z-50
    transform transition-transform duration-300 ease-out
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 px-6 text-lg font-medium">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/work" onClick={() => setIsMenuOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              {" "}
              <HashLink
                smooth
                to="/#experience"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                Experience{" "}
              </HashLink>{" "}
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>

            {/* <li className="pt-4">
      <button
        onClick={() => {
          onOpenQuery();
          setIsMenuOpen(false);
        }}
        className="flex items-center gap-2 underline underline-offset-4"
      >
        Send Query
        <Icon icon="oi:arrow-right" className="w-5 h-5" />
      </button>
    </li> */}
          </ul>
        </div>
      </nav>
    // </nav>
  );
};

export default Navbar;
