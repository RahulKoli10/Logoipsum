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
        <div className="max-w-auto  px-6 py-10">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-2 text-black">
            My Works
          </h2>
          <p className="text-black text-center mb-12 text-lg">
            Discover My Latest Work And Strategic Solutions That Shape Business
            Growth
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-5xl text-black">
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
                  className="group relative block max-h-full overflow-hidden  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                    srcSet={`${item.image} 400w, ${item.image} 600w`}
                    sizes="(max-width: 768px) 400px, 600px"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="flex items-center gap-3 text-white text-4xl ">
                      {item.hoverText}{" "}
                      <Icon
                        icon="ri:arrow-right-up-line"
                        width="40"
                        height="40"
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
          <Link to="/work">
            <button className="bg-[#0033FF] text-white px-6 py-3 flex items-center gap-3 mx-auto mt-10 transition">
              Projects{" "}
              <Icon icon="si:arrow-right-line" width="24" height="24" />
            </button>
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
