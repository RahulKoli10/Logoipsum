import { useState } from "react";
import QueryModal from "../components/QueryModal.jsx";
import Navbar from "../components/Nav.jsx";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

const WorkDetail = () => {
  const [openQuery, setOpenQuery] = useState(false);
  return (
    <main className="bg-white text-lg text-black">
      <Navbar onOpenQuery={() => setOpenQuery(true)} />

      {openQuery && <QueryModal onClose={() => setOpenQuery(false)} />}

      {/*  HERO  */}
      <section className="mx-auto px-4 sm:px-6 pt-10 pb-16">
        <Link to="/">
          <p>Back</p>{" "}
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mt-6 sm:mt-10 ml-4 sm:ml-10">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">VexLogic AI Assistant</h1>

            <div className="flex flex-col md:flex-row gap-4 text-xs sm:text-sm text-gray-500">
              <span>Role: UI/UX Designer</span>
              <span className="flex items-center gap-1">
                <Icon icon="iconamoon:clock-thin" width="20" height="20" />
                <span>Timeline: 3hr</span>
              </span>
            </div>
          </div>

          <p className="max-w-sm sm:max-w-md mr-4 sm:mr-20 md:ml-auto">
            Designing a minimal, intelligent interface for seamless human–AI
            interaction.
          </p>
        </div>
      </section>

      {/*  HERO IMAGE  */}
      <section className="w-full">
        <img
          src="/assets/overview1.png"
          alt="Project Hero"
          className="w-full object-cover"
          loading="lazy"
        />
      </section>

      {/*  PROJECT OVERVIEW  */}
      <section className="mx-4 sm:mx-8 lg:mx-15 px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src="/assets/overview2.png"
            alt="Overview"
            className="w-full max-w-sm sm:max-w-md lg:w-[550px] h-auto"
            loading="lazy"
            srcSet="/assets/overview2.png 400w, /assets/overview2.png 600w"
            sizes="(max-width: 768px) 400px, 600px"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 ">Project Overview</h3>
          <p className=" leading-relaxed">
            VexLogic AI Assistant is a modern conversational platform designed
            for users who want fast, clean, and distraction-free interactions
            with AI. My goal was to create a UI that feels intelligent,
            lightweight, and enjoyable, without overwhelming the user with
            unnecessary elements. The final design focuses on balance—clarity,
            speed, comfort, and structure.
          </p>
        </div>
      </section>

      {/*  PROBLEM STATEMENT  */}
      <section className="mx-4 sm:mx-8 lg:mx-15 px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Problem Statement</h2>
          <p className="mb-6 sm:mb-10">
            Most AI chat interfaces today feel cluttered, unorganized, or slow.
            Users often struggle with:
          </p>
          <ul className="space-y-3 list-disc pl-5 mb-6 sm:mb-10 marker:text-2xl sm:marker:text-3xl">
            <li>Confusing layout</li>
            <li>Poor message hierarchy</li>
            <li>Weak visual guidance</li>
            <li>Build a consistent and scalable design system.</li>
            <li>No emotional feel or brand personality</li>
          </ul>
          <p>
            We needed a UX that feels simple but powerful—and a UI that supports
            continuous, distraction-free conversation
          </p>
        </div>
        <div>
            <img src="/assets/overview3.png" alt="Problem" className="w-full h-auto" loading="lazy"  srcSet="/assets/overview3.png 400w, /assets/overview3.png 600w" sizes="(max-width: 768px) 400px, 600px" />

        </div>
      </section>

      {/*  PROJECT GOALS   */}
      <section className="mx-4 sm:mx-8 lg:mx-15 px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <img src="/assets/overview4.png" alt="Goals" className="w-full h-auto" loading="lazy" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-5">Project Goals</h3>
          <p className="mb-3 sm:mb-5">
            Designing a modern, intuitive, and user-centric AI interface focused
            on clarity, comfort, and seamless interaction.The goal was to create
            a digital environment that reduces cognitive load, enhances
            readability, and delivers a smooth conversational experience—while
            maintaining a premium, professional visual identity.
          </p>
          <p className="font-semibold mb-3">Key Point</p>
          <ul className="space-y-3 list-disc pl-5 mb-6 sm:mb-10 marker:text-2xl sm:marker:text-3xl">
            <li>Create a clean and distraction-free layout.</li>
            <li>Support both light and dark modes elegantly.</li>
            <li>Improve message readability and hierarchy.</li>
            <li>Build a consistent and scalable design system.</li>
            <li>Add smooth micro-interactions for better usability.</li>
          </ul>
        </div>
      </section>

      {/*   CHALLENGES & SOLUTIONS */}
      <section className="mx-4 sm:mx-8 lg:mx-15 px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold my-6 sm:my-10">
            Challenges & Solutions
          </h3>
          <p className="mb-3 sm:mb-5">
            Throughout the design process, several usability and visual clarity
            issues emerged. The goal was to overcome these challenges with
            simple, thoughtful design decisions that improved readability,
            reduced friction, and created a more polished user experience.
          </p>
          <p className="font-semibold mb-3">Key Point</p>
          <ul className="space-y-3 list-disc pl-5 mb-6 sm:mb-10 marker:text-2xl sm:marker:text-3xl">
            <li>
              <span className="font-semibold">Generic visual style</span>:
              Introduced a unique spacing system and branded UI elements.
            </li>

            <li>
              {" "}
              <span className="font-semibold">
                Low readability in long chats
              </span>
              : Improved hierarchy, line height, and bubble padding.
            </li>
          </ul>
        </div>
        <div>
          <img src="/assets/overview5.png" alt="Challenges" className="w-full h-auto" loading="lazy" srcSet="/assets/overview5.png 400w, /assets/overview5.png 600w" sizes="(max-width: 768px) 400px, 600px" />
        </div>
      </section>

       {/* OUTCOME & RESULTS   */}
      <section className="mx-4 sm:mx-8 lg:mx-15 px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <img src="/assets/overview6.png" alt="Results" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="flex justify-end flex-col">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-10">Outcome & Results</h3>

          <p className="leading-relaxed">
            The final design delivered a more focused, intuitive, and visually
            balanced experience. Through refined spacing, improved hierarchy,
            and thoughtful interaction patterns, the overall product became
            smoother, more reliable, and more enjoyable for users—strengthening
            both usability and brand perception.
          </p>
        </div>
      </section>

      {/*  RELATED WORK  */}
      <section id="work" className="bg-white">
        <div className="max-w-full px-4 sm:px-6 py-10 sm:py-20">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-black">
            My Works
          </h2>
          <p className="text-black text-center mb-8 sm:mb-12 text-base sm:text-lg">
            Discover My Latest Work And Strategic Solutions That Shape Business
            Growth
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-base sm:text-lg text-black">
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
                  className="group relative block max-h-full overflow-hidden  -lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="flex items-center gap-3 text-white text-4xl ">
                      {item.hoverText}
                      <img
                        src="/assets/arrow-right.svg"
                        alt="arrow"
                        className="w-6 h-6 filter invert brightness-200 rotate-315"
                      />
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
      <Footer />
    </main>
  );
};

export default WorkDetail;
