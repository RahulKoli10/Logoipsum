import Frame2 from "../assets/Frame2.png"; 
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Navbar = ({ onOpenQuery }) => {
  return (
    <nav className="w-full bg-white shadow-md text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/"><img src={Frame2} alt="Logo" className="h-8" /></Link>
         

        <ul className="hidden md:flex items-center gap-10 text-lg font-medium  ">
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

        <button
          onClick={onOpenQuery}
          className="hidden md:flex items-center gap-2 text-lg font-medium underline underline-offset-4 hover:text-black cursor-pointer"
        >
          Send Query<Icon icon="oi:arrow-right" width="20" height="20" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
