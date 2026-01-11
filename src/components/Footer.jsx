import frame2 from "../assets/frame.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-dm bg-blue-50 text-gray-500 text-lg">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-black text-lg font-semibold mb-3">
            <img src={frame2} alt="" className="h-8" />
          </h2>
          <p className="text-sm text-gray-800">
            lum ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/work" className="hover:text-black cursor-pointer">Work</Link></li>
            <li><Link to="/about" className="hover:text-black cursor-pointer">About</Link></li>
            <li><Link to="#experience" className="hover:text-black cursor-pointer">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-black cursor-pointer">Contact me</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-black text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer"><Link to="https://www.linkedin.com"> Linkedin</Link></li>
            <li className="hover:text-black cursor-pointer"><Link to="https://www.twitter.com">x (twitter)</Link></li>
            <li className="hover:text-black cursor-pointer"><Link to="https://www.behance.com">Behance</Link></li>
            <li className="hover:text-black cursor-pointer"><Link to="https://www.instagram.com">Instagram</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-black mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Join My Newsletter for Meaningful Updates{" "}
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm text-black rounded-l-md outline-none bg-white"
            />
            <button className="bg-blue-600 px-4 text-sm text-white rounded-r-md hover:bg-blue-700">
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
