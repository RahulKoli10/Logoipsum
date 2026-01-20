import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-dm bg-[#F4F6FF] text-gray-500 text-base">
  {/* TOP FOOTER */}
  <div
    className="
      max-w-[1440px]
      mx-auto
      px-4 sm:px-6
      py-8 sm:py-12
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-[1.6fr_0.9fr_0.9fr_2fr]
      gap-6 sm:gap-8 lg:gap-12
    "
  >
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

      <p className="text-[16px] text-gray-800 max-w-sm text-center md:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.
      </p>
    </div>

    {/* Quick Links */}
    <div className="lg:pl-15 ">
      <h3 className="text-black font-semibold text-lg mb-2">
        Quick Links
      </h3>
      <ul className="space-y-2 text-[16px]">
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
    <div className="lg:-pr-10 ">
      <h3 className="text-black font-semibold text-lg mb-2 ">
        Social Links
      </h3>
      <ul className="space-y-2 text-[16px]">
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

    {/* Newsletter */}
    <div>
      <h3 className="text-black font-semibold text-lg mb-2">
        Newsletter
      </h3>

      <p className="text-[16px] text-gray-400 mb-4 max-w-md text-center sm:text-left mx-auto sm:mx-0">
        Join my newsletter for meaningful updates and insights.
      </p>

      <div className="flex flex-col sm:flex-col md:flex-row items-center md:items-stretch gap-3 md:gap-0">
  {/* Input */}
  <input
    type="email"
    placeholder="Your email"
    className="
      w-[260px] sm:w-[320px] md:w-full
      h-[44px]
      px-4
      text-sm
      text-black
      outline-none
      bg-white 
      mx-auto md:mx-0
    "
  />

  {/* Button */}
  <button
    className="
      bg-[#0033FF]
      text-white
      h-[44px]
      w-[140px] sm:w-[160px] md:w-[112px]
      text-sm
      font-medium 
      mx-auto md:mx-0
    "
  >
    Subscribe
  </button>
</div>

    </div>
  </div>

  {/* BOTTOM BAR */}
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
