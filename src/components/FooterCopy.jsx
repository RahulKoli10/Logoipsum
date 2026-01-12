import { Link } from "react-router-dom";
import Workdetails from "../pages/workdetails.jsx";

const Footer = () => {

  const token = localStorage.getItem("token"); // login check
  const role = localStorage.getItem("role");   // buyer / seller

  return (
    <footer className="font-dm  text-gray-500 text-lg">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <Link to="/">
            <img src="/assets/frame.png" alt="Logo" className="h-8 cursor-pointer mb-4" />
          </Link>
          <p className="text-sm text-gray-800">
            lum ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact me</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-black text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="https://www.linkedin.com">Linkedin</Link></li>
            <li><Link to="https://www.twitter.com">x (twitter)</Link></li>
            <li><Link to="https://www.behance.com">Behance</Link></li>
            <li><Link to="https://www.instagram.com">Instagram</Link></li>
          </ul>
        </div>
        {/* Seller Links */}
<div className="flex flex-col gap-3">

  {/* NOT LOGGED IN → SHOW BOTH */}
  {!token && (
    <>
      <Link
        to="/workdetails"
        className="px-4 py-2 rounded-lg text-center text-sm font-medium
                   bg-blue-600 text-white
                   hover:bg-blue-700 transition-all duration-200"
      >
        Become a Seller
      </Link>

      <Link
        to="/seller/dashboard"
        className="px-4 py-2 rounded-lg text-center text-sm font-medium
                   border border-blue-600 text-blue-600
                   hover:bg-blue-50 transition-all duration-200"
      >
       Buyer Login
      </Link>
    </>
  )}

  {/* LOGGED IN BUYER */}
  {token && role === "buyer" && (
    <Link
      to="/workdetails"
      className="px-4 py-2 rounded-lg text-center text-sm font-semibold
                 bg-gradient-to-r from-blue-600 to-indigo-600
                 text-white shadow-md
                 hover:shadow-lg hover:scale-[1.02]
                 transition-all duration-200"
    >
      Switch to Seller
    </Link>
  )}

  {/* LOGGED IN SELLER */}
  {token && role === "seller" && (
    <Link
      to="/seller/dashboard"
      className="px-4 py-2 rounded-lg text-center text-sm font-semibold
                 bg-green-600 text-white shadow-md
                 hover:bg-green-700 hover:shadow-lg
                 transition-all duration-200"
    >
      Go to Seller Dashboard
    </Link>
  )}

</div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600 whitespace-nowrap">
            © 2025 H.A.K GROUP. All rights reserved.
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
