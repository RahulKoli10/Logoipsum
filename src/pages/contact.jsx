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
     <section id="contact" className="bg-white text-black mx-auto mt-10 pb-5">
        <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let’s Talk</h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md">
              Get in touch for collaborations, business inquiries, or project
              discussions. I’m always open to meaningful conversations that lead
              to impactful results.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 mb-8"></div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <p className="text-lg">
                <span className="font-semibold">Email:</span>{" "}
                yourname@example.com
              </p>
              <p className="text-lg">
                <span className="font-semibold">Phone:</span> +91 99999 99999
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold mb-4">Social Links:</p>
              <div className="flex gap-6 text-2xl">
                <Icon icon="mdi:linkedin" width="24" height="24" />
                <Icon icon="proicons:x-twitter" width="24" height="24" />
                <Icon icon="mdi:instagram" width="24" height="24" />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="w-full max-w-md ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-100 rounded-md px-2 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-100 rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="w-full bg-gray-100 rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-3 rounded-md hover:bg-blue-700 transition block mx-auto"
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