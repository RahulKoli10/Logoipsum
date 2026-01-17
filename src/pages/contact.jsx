import { Icon } from "@iconify/react"
import { useState } from "react";
import Navbar from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import QueryModal from "../components/QueryModal.jsx";
 
function Contact() {
   const [openQuery, setOpenQuery] = useState(false);
  return (
     <main className="bg-white text-lg text-black">
      <Navbar onOpenQuery={() => setOpenQuery(true)} />

      {openQuery && <QueryModal onClose={() => setOpenQuery(false)} />}
     <section id="contact" className="bg-white text-black mx-auto mt-6 sm:mt-8 md:mt-10 pb-8 sm:pb-10 md:pb-12">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Let's Talk</h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
              Get in touch for collaborations, business inquiries, or project
              discussions. I'm always open to meaningful conversations that lead
              to impactful results.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 mb-6 sm:mb-8"></div>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg">
                <span className="font-semibold">Email:</span>{" "}
                yourname@example.com
              </p>
              <p className="text-base sm:text-lg">
                <span className="font-semibold">Phone:</span> +91 99999 99999
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold mb-3 sm:mb-4">Social Links:</p>
              <div className="flex gap-4 sm:gap-6">
                <Icon icon="mdi:linkedin" className="w-5 h-5 sm:w-6 sm:h-6" />
                <Icon icon="proicons:x-twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
                <Icon icon="mdi:instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="w-full max-w-md md:ml-auto space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-100 rounded-md px-3 sm:px-4 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 rounded-md px-3 sm:px-4 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-100 rounded-md px-3 sm:px-4 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="w-full bg-gray-100 rounded-md px-3 sm:px-4 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition w-full sm:w-auto block sm:mx-auto text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
      </main>
  )
}

export default Contact