import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import QueryModal from "../components/QueryModal.jsx";
import { Icon } from "@iconify/react";
export default function Work() {
  const [openQuery, setOpenQuery] = useState(false);

  return (
    <main className="bg-white text-lg text-black">

     <Navbar onOpenQuery={() => setOpenQuery(true)} />

      {openQuery && <QueryModal onClose={() => setOpenQuery(false)} />}

      <section id="work" className="bg-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-black">
            My Works
          </h2>
          <p className="text-black text-center mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg px-4">
            Discover My Latest Work And Strategic Solutions That Shape Business
            Growth
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 text-base sm:text-xl md:text-2xl text-black">
            {[
              {
                title: "Development",
                image: "/assets/mywork4.png",
                link: "/workdetails",
                hoverText: "MetaView 3D ",
              },
              {
                title: "Development",
                image: "/assets/mywork3.png",
                link: "/workdetails",
                hoverText: "RoomScan 3D",
              },
              {
                title: "Digital Transformation",
                image: "/assets/mywork2.png",
                link: "/workdetails",
                hoverText: "FrameMotion",
              },
              {
                title: "Business Strategy",
                image: "/assets/mywork1.png",
                link: "/workdetails",
                hoverText: "StreamBoard",
              },
            ].map((item, index) => (
              <div key={index}>
                {/* Category */}
                <p className="mb-3 font-medium text-gray-800">{item.title}</p>

                {/* Image Card */}
                <Link
                  to={item.link}
                  className="group relative block w-full max-w-full md:w-[644px] md:h-[666px] overflow-hidden mx-auto md:mx-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full md:w-[644px] md:h-[666px] object-cover duration-500  "
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="flex items-center gap-2 sm:gap-3 text-white text-2xl sm:text-3xl md:text-4xl px-4 text-center">
                      {item.hoverText}{" "}
                      <Icon
                        icon="ri:arrow-right-up-line"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      />
                      {/* <img
                        src={ArrowhiteWhright}
                        alt="arrow"
                        className="w-6 h-6 filter invert brightness-200 rotate-315"
                      /> */}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/work" className="flex justify-center mt-8 sm:mt-10">
            <button className="bg-[#0033FF] text-white px-6 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 mx-auto transition text-base sm:text-lg">
              Projects{" "}
              <Icon
                icon="si:arrow-right-line"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
