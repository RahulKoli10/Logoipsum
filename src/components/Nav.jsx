import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Navbar = ({ onOpenQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md text-black">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/"><img src="/assets/frame.png" alt="Logo" className="h-6 sm:h-7 md:h-8 cursor-pointer" /></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about"  >
              About
            </Link>
          </li>
          <li>
            <Link to="/work" >
              Work
            </Link>
          </li>
          <li>
            <Link to="#experience" >
              Experience
            </Link>
          </li>
          <li>
            <Link to="/contact"  >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Send Query */}
        <button
          onClick={onOpenQuery}
          className="hidden md:flex items-center gap-2 text-base lg:text-lg font-medium underline underline-offset-4 hover:text-black cursor-pointer"
        >
          Send Query<Icon icon="oi:arrow-right" className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10"
          aria-label="Toggle menu"
        >
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 sm:gap-6 py-4 sm:py-6 text-base sm:text-lg font-medium">
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
              <Link to="#experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => { onOpenQuery(); setIsMenuOpen(false); }}
                className="flex items-center gap-2 underline underline-offset-4 hover:text-black cursor-pointer"
              >
                Send Query<Icon icon="oi:arrow-right" className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
