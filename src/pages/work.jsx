import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import QueryModal from "../components/QueryModal.jsx";
export default function Work() {
  const [openQuery, setOpenQuery] = useState(false);

  return (
    <main className="bg-white text-lg text-black">

     <Navbar onOpenQuery={() => setOpenQuery(true)} />

      {openQuery && <QueryModal onClose={() => setOpenQuery(false)} />}

      <section id="work" className="bg-white mx-auto mt-10 pb-5 text-black">
        <div className="max-w-auto  px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-2 text-black">
            My Works
          </h2>
          <p className="text-black text-center mb-12 text-lg">
            Discover My Latest Work And Strategic Solutions That Shape Business
            Growth
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-black">
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
                  className="group relative block max-h-full overflow-hidden rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="flex items-center gap-3 text-white text-4xl ">
                      {item.hoverText}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* <button className="bg-blue-600 text-white px-6 py-3 flex items-center gap-3 mx-auto mt-10 hover:bg-blue-700 transition">
            View Projects{" "}
            <img
              src={ArrowhiteWhright}
              alt=""
              className="invert brightness-200 "
            />
          </button> */}
        </div>
      </section>
      <Footer/>
    </main>
  );
}
