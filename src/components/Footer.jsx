import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-dm bg-[#F4F6FF] text-gray-500 text-base">
      <div
        className=" max-w-[1440px] mx-auto  px-4 sm:px-6  py-8 sm:py-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_2fr]  gap-6 sm:gap-8 lg:gap-10 "  >
        {/* Brand */}
        <div>
          <Link to="/">
            <img
              src="/assets/frame.png"
              alt="Logo"
              className="h-6 sm:h-8 mb-3"
              loading="lazy"
            />
          </Link>

          <p className="text-sm text-gray-800 max-w-sm text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>

        {/* Quick Links */}
        <div className=" ">
          <h3 className="text-black font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/work" className="hover:text-black">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="#experience" className="hover:text-black">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black">
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-3">
            Social Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="https://www.linkedin.com" className="hover:text-black">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com" className="hover:text-black">
                X (Twitter)
              </Link>
            </li>
            <li>
              <Link to="https://www.behance.com" className="hover:text-black">
                Behance
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com" className="hover:text-black">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter (wider column) */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-3">Newsletter</h3>

          <p className="text-sm text-gray-400 mb-4 max-w-md">
            Join my newsletter for meaningful updates and insights.
          </p>

          <div className="flex flex-col sm:flex-row  ">
            <input
              type="email"
              placeholder="Your email"
              className="
            w-full
            h-[44px]
            px-4
            text-sm
            text-black
            outline-none
            bg-white
          "
            />
            <button className="bg-[#0033FF] text-white px-4 h-[44px] text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <div className="hidden sm:block flex-1 h-px bg-gray-300"></div>

          <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap text-center">
            © 2025 H.A.K GROUP. All rights reserved.
          </p>

          <div className="hidden sm:block flex-1 h-px bg-gray-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
