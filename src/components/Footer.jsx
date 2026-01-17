import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-dm bg-[#F4F6FF] text-gray-500 text-base sm:text-lg">
      <div className="max-w-360 mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Brand */}
        <div>
          <Link to="/">
            <img
              src="/assets/frame.png"
              alt="Logo"
              className="h-6 sm:h-8 cursor-pointer mb-3"
              loading="lazy"
            />
          </Link>
          <p className="text-xs sm:text-sm text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit architecto ipsum exercitationem magnam repellendus

          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-semibold text-lg sm:text-[20px] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-lg">
            <li>
              <Link to="/work" className="hover:text-black cursor-pointer">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link
                to="#experience"
                className="hover:text-black cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black cursor-pointer">
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-black font-semibold text-lg sm:text-[20px] mb-3">
            Social Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-black cursor-pointer">
              <Link to="https://www.linkedin.com"> Linkedin</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link to="https://www.twitter.com">x (twitter)</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link to="https://www.behance.com">Behance</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link to="https://www.instagram.com">Instagram</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-black mb-3 font-semibold text-lg sm:text-xl">Newsletter</h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-4">
            Join My Newsletter for Meaningful Updates{" "}
          </p>

          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-[240px] lg:w-[360px] h-[44px] px-4 sm:px-10 text-sm text-black outline-none bg-white mb-2 sm:mb-0"
            />
            <button className="bg-[#0033FF] px-4 text-sm text-white w-full sm:w-[112px] h-[44px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          {/* Left line */}
          <div className="hidden sm:block flex-1 h-px bg-gray-300"></div>

          {/* Text */}
          <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap text-center sm:text-left">
            © 2025 H.A.K GROUP. All rights reserved.
          </p>

          {/* Right line */}
          <div className="hidden sm:block flex-1 h-px bg-gray-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
