import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-dm bg-[#F4F6FF] text-gray-500 text-lg">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 ">
        {/* Brand */}
        <div>
          <Link to="/">
            <img
              src="/assets/frame.png"
              alt="Logo"
              className="h-8 cursor-pointer mb-3"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit architecto ipsum exercitationem magnam repellendus
             
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-20">
          <h3 className="text-black font-semibold text-[20px] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg">
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
          <h3 className="text-black font-semibold text-[20px] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 ">
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
          <h3 className="text-black mb-3 font-semibold">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Join My Newsletter for Meaningful Updates{" "}
          </p>

          <div className="flex ">
            <input
              type="email"
              placeholder="Your email"
              className="w-[360px] h-[44px] px-10 text-sm text-black outline-none bg-white"
            />
            <button className="bg-[#0033FF] px-4 text-sm text-white  w-[112px] h-[44px]  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-6">
          {/* Left line */}
          <div className="flex-1 h-px bg-gray-300"></div>

          {/* Text */}
          <p className="text-sm text-gray-600 whitespace-nowrap">
            © 2025 H.A.K GROUP. All rights reserved.
          </p>

          {/* Right line */}
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
