import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "../components/Nav.jsx";
import QueryModal from "../components/QueryModal.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css"; 

function Home() {
  const [openQuery, setOpenQuery] = useState(false);

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            setCount(0);
          } else {
            setHasStarted(false);
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!hasStarted) return;

      let start = 0;
      const end = target;
      const duration = 1500;
      const incrementTime = 20;
      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, [hasStarted, target]);

    return <span ref={counterRef}>{count}+</span>;
  };

  const experiences = [
    {
      years: "3+ Years",
      company: "Creatify Labs",
      role: "Lead / Senior Product Designer",
      duration: "2025 - PRESENT",
      points: [
        "Defined Brand Voice And Identity For Startups.",
        "Delivered High-Impact Brand Campaigns.",
        "Championed Digital Transformation.",
        "Designed Presentation Frameworks & Visual Stories.",
      ],
    },
    {
      years: "2+ Years",
      company: "Creatify Labs",
      role: "Lead / Senior Product Designer",
      duration: "2023 - 2025",
      points: [
        "Defined Brand Voice And Identity For Startups.",
        "Delivered High-Impact Brand Campaigns.",
        "Championed Digital Transformation.",
        "Designed Presentation Frameworks & Visual Stories.",
      ],
    },
    {
      years: "2+ Years",
      company: "VisionCraft Studio",
      role: "Design Systems Architect",
      duration: "2021 - 2022",
      points: [
        "Defined Brand Voice And Identity For Startups.",
        "Delivered High-Impact Brand Campaigns.",
        "Championed Digital Transformation.",
        "Designed Presentation Frameworks & Visual Stories.",
      ],
    },
    {
      years: "2+ Years",
      company: "PixelForge Solutions",
      role: "Design Systems Architect",
      duration: "2022 - 2018",
      points: [
        "Defined Brand Voice And Identity For Startups.",
        "Delivered High-Impact Brand Campaigns.",
        "Championed Digital Transformation.",
        "Designed Presentation Frameworks & Visual Stories.",
      ],
    },
  ];

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const expertiseRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const setupAutoScroll = (container, speed = 0.5) => {
      if (!container) return;

      let isPaused = false;

      const onEnter = () => (isPaused = true);
      const onLeave = () => (isPaused = false);

      container.addEventListener("mouseenter", onEnter);
      container.addEventListener("mouseleave", onLeave);

      const interval = setInterval(() => {
        if (isPaused) return;

        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft < maxScroll) {
          container.scrollLeft += speed;
        }
      }, 20);

      return () => {
        clearInterval(interval);
        container.removeEventListener("mouseenter", onEnter);
        container.removeEventListener("mouseleave", onLeave);
      };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start auto-scroll for expertise
          setTimeout(() => {
            setupAutoScroll(expertiseRef.current, 0.5);
          }, 600);
        } else {
          // Stop auto-scroll when out of view
          // The cleanup will handle stopping
        }
      },
      { threshold: 0.1 }
    );

    if (expertiseRef.current) {
      observer.observe(expertiseRef.current);
    }

    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start auto-scroll for testimonials rows after 1 second delay
          setTimeout(() => {
            setupAutoScroll(row1Ref.current, 0.6);
            setupAutoScroll(row2Ref.current, 0.7);
          }, 600);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }

    return () => {
      observer.disconnect();
      testimonialsObserver.disconnect();
    };
  }, []);

  //EXPERTISE auto scrollable cards logic

  return (
    <div className="text-body ">
      {/* NAV */}
      <Navbar onOpenQuery={() => setOpenQuery(true)} />

      {openQuery && <QueryModal onClose={() => setOpenQuery(false)} />}

      {/* HOME / HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="bg-white">
        <div className="max-w-auto mx-10 px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {/* LEFT IMAGE + BLOB */}
          <div className="relative flex justify-center">
            {/* Vertical Line + Text */}
            <div className="absolute left-[-60px] top-0 h-full flex flex-col items-center justify-between">
              {/* Top Dot */}
              <span className="w-2 h-2 bg-black rounded-full"></span>

              {/* Line */}
              <span className="w-[1px] flex-1 bg-black"></span>

              {/* Bottom Dot */}
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span className="mt-15 text-sm text-black tracking-wide rotate-[-90deg]">
                My Short Story
              </span>
            </div>

            {/* Blob Background */}
            <div className="p-10">
              <img
                src="/assets/secondImgHero.png"
                alt="Nitish Kumar"
                className="w-[400px] md:w-[500px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-lg">
            <p className="text-lg text-gray-400 font-bold tracking-widest mb-8">
              ABOUT ME
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-5">
              Hey, I'm Nitish Kumar👋
            </h2>

            <p className="text-black leading-relaxed mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <p className="text-black leading-relaxed mb-8">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing.
            </p>

            {/* CTA BUTTON */}
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-10 py-4 text-lg font-semibold shadow-md hover:bg-blue-700 transition">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-[#F4F6FF] rounded-xl py-8">
            <p className="text-sm text-gray-500 mb-2">YEAR OF EXPERIENCE</p>
            <h3 className="text-6xl font-bold text-black">
              <Counter target={4} />
            </h3>
          </div>

          <div className="bg-[#F4F6FF] rounded-xl py-8">
            <p className="text-sm text-gray-500 mb-2">PROJECTS FOUNDED</p>
            <h3 className="text-6xl font-bold  text-black">
              <Counter target={30} />
            </h3>
          </div>

          <div className="bg-[#F4F6FF] rounded-xl py-8">
            <p className="text-sm text-gray-500 mb-2">INDUSTRIES SERVED</p>
            <h3 className="text-6xl font-bold  text-black">
              <Counter target={5} />
            </h3>
          </div>

          <div className="bg-[#F4F6FF] rounded-xl py-8">
            <p className="text-sm text-gray-500 mb-2">TEAMS LED</p>
            <h3 className="text-6xl font-bold text-black">
              <Counter target={50} />
            </h3>
          </div>
        </div>
      </section>

      {/* MY EXPERTISE */}
      <section className="bg-white">
        <div className="max-w-auto mx-5 px-6 py-20">
          <p className="text-lg text-gray-400 text-center mb-2">MY SKILLS</p>

          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            My Expertise
          </h2>

          {/* Scrollable cards */}
          <div
            ref={expertiseRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          >
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div>
                <div
                  key={i}
                  className="min-w-[320px] bg-[#F4F6FF] rounded-xl p-6 border-b-5 border-blue-600  "
                >
                  <img
                    src="/assets/expert.svg"
                    alt=""
                    className="mb-2 w-[30px] md:w-[30px]"
                  />

                  <h3 className="text-xl font-semibold mb-3 text-black">
                    Strategic Leadership
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY WORKS */}
      <section id="work" className="bg-white">
        <div className="max-w-auto  px-6 py-20">
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
            <button className="bg-blue-600 text-white px-6 py-3 flex items-center gap-3 mx-auto mt-10 hover:bg-blue-700 transition">
              View Projects{" "}
              <Icon icon="si:arrow-right-line" width="24" height="24" />
            </button>
          </Link>
        </div>
      </section>

      {/* MY EXPERIENCE */}
      <section id="experience" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-black">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12">
            MY Experience
          </h2>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="pb-8 mb-8 border-b last:border-b-0 last:mb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* LEFT BADGE */}
                <div className="md:col-span-2 flex items-start">
                  <span className="inline-flex border px-4 py-1 rounded-full text-sm leading-none">
                    {exp.years}
                  </span>
                </div>

                {/* CENTER CONTENT */}
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-semibold mb-1">{exp.company}</h3>

                  <p className="mb-4 text-gray-700">{exp.role}</p>

                  <ul className="space-y-3 text-gray-700">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon
                          icon="bitcoin-icons:verify-filled"
                          width="25"
                          height="25"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT DATE */}
                <div className="md:col-span-3 flex md:justify-end items-start gap-2 text-gray-600">
                  <Icon icon="iconamoon:clock-light" width="20" height="20" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
          <div className=" border-b border-gray-200 last:border-b-0"> </div>
        </div>
      </section>

      {/* MY GUIDE / JOURNEY SECTION */}
      <section id="guide" className="bg-white text-black  ">
        <div className="max-w-7xl mx-auto px-6 pt-5 pb-20">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Explore My Professional Journey And The <br />
            Lessons That Guide My Decisions
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* LEFT TEXT */}
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="text-3xl font-bold">01</span>
                <p className="leading-relaxed text-xl">
                  At NovaNectar Smart IT Solutions, our vision is to become a
                  trusted growth partner for businesses by delivering
                  innovation, collaboration and support any time it is needed,
                  big or small.
                </p>
              </div>

              <div className="flex gap-6">
                <span className="text-3xl font-bold">02</span>
                <p className="leading-relaxed text-xl">
                  We aim to be more than just a service provider and want to
                  grow alongside our clients by offering smart IT solutions,
                  creative thinking and dependable teamwork.
                </p>
              </div>

              <div className="flex gap-6">
                <span className="text-3xl font-bold">03</span>
                <p className="leading-relaxed text-xl">
                  Whether you are a startup or expanding firm, we are confident
                  in offering quality and simple digital services that yield
                  results. We are dedicated to listening, evolving and being
                  there when it counts the most because your success is our
                  success.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <div className="p-10">
                <img
                  src="/assets/secondImgHero.png"
                  alt="Guide"
                  className="w-[260px] md:w-[700px] rounded-2xl object-cover  -scale-x-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} id="testimonials" className="bg-[#F6F8FF]">
        <div className=" mx-auto px-6 py-10">
          <h2 className="text-3xl font-semibold mb-14 text-[#1F2A44]">
            Customer Testimonials
          </h2>

          <div
            ref={row1Ref}
            className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing mb-10"
          >
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={`r1-${i}`}
                className="min-w-[400px] bg-[#F6F8FF] border border-gray-500 rounded-xl p-8 flex flex-col justify-between ml-7"
              >
                <div className="flex gap-2 mb-2 text-yellow-400 text-2xl">
                  ★★★★★
                </div>

                <p className="text-[#1F2A44] text-[17px] leading-[26px] mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-pink-500 overflow-hidden">
                    <img
                      src="/assets/review.svg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Kathryn Murphy</p>
                    <p className="text-sm text-gray-500">McDonald's</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div
            ref={row2Ref}
            className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing ml-12"
          >
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={`r2-${i}`}
                className="min-w-[400px] bg-[#F6F8FF] border border-gray-500 rounded-xl p-8 flex flex-col justify-between"
              >
                <div className="flex gap-2 mb-2 text-yellow-400 text-2xl">
                  ★★★★★
                </div>

                <p className="text-[#1F2A44] text-[17px] leading-[26px] mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500 overflow-hidden">
                    <img
                      src="/assets/review.svg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Dianne Russell</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
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
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
