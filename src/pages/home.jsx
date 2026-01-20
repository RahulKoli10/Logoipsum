import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "../components/Nav.jsx";
import QueryModal from "../components/QueryModal.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";
import { motion } from "framer-motion";
function Home() {
  // const useAutoScroll = ({ containerRef, sectionRef, speed = 0.4 }) => {
  //   useEffect(() => {
  //     const container = containerRef.current;
  //     const section = sectionRef?.current;

  //     if (!container) return;

  //     let rafId;
  //     let paused = false;

  //     const onEnter = () => (paused = true);
  //     const onLeave = () => (paused = false);

  //     container.addEventListener("mouseenter", onEnter);
  //     container.addEventListener("mouseleave", onLeave);
  //     container.addEventListener("touchstart", onEnter, { passive: true });
  //     container.addEventListener("touchend", onLeave, { passive: true });

  //     const animate = () => {
  //       if (!paused) {
  //         const maxScroll = container.scrollWidth / 2;
  //         container.scrollLeft += speed;

  //         if (container.scrollLeft >= maxScroll) {
  //           container.scrollLeft = 0;
  //         }
  //       }
  //       rafId = requestAnimationFrame(animate);
  //     };

  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           rafId = requestAnimationFrame(animate);
  //         } else {
  //           cancelAnimationFrame(rafId);
  //         }
  //       },
  //       { threshold: 0.2 },
  //     );

  //     if (section) observer.observe(section);

  //     return () => {
  //       cancelAnimationFrame(rafId);
  //       observer.disconnect();
  //       container.removeEventListener("mouseenter", onEnter);
  //       container.removeEventListener("mouseleave", onLeave);
  //       container.removeEventListener("touchstart", onEnter);
  //       container.removeEventListener("touchend", onLeave);
  //     };
  //   }, []);
  // };

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
        { threshold: 0.1 },
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
      years: "3+ Years",
      company: "Creatify Labs",
      role: "Lead / Senior Product Designer",
      duration: "2025 – Present",
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
      duration: "2023 – 2025",
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
      duration: "2023 – 2025",
      points: [
        "Defined Brand Voice And Identity For Startups.",
        "Delivered High-Impact Brand Campaigns.",
        "Championed Digital Transformation.",
        "Designed Presentation Frameworks & Visual Stories.",
      ],
    },
  ];

  const expertiseData = [
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
    {
      icon: "/assets/expert.svg",
      title: "Strategic Leadership",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since tvhe 1500s.",
    },
  ];

  const testimonialsData = [
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      avatar: "/assets/testimonialReview.png",
      name: "John Doe",
      company: "Tech Startup Inc.",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      avatar: "/assets/testimonialReview.png",
      name: "Jane Smith",
      company: "Digital Agency",
    },
    {
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      avatar: "/assets/testimonialReview.png",
      name: "Mike Johnson",
      company: "E-commerce Co.",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      avatar: "/assets/testimonialReview.png",
      name: "Sarah Wilson",
      company: "Fashion Brand",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      avatar: "/assets/testimonialReview.png",
      name: "David Brown",
      company: "FinTech Solutions",
    },
  ];

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const expertiseSectionRef = useRef(null);
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
      { threshold: 0.1 },
    );

    if (expertiseSectionRef.current) {
      observer.observe(expertiseSectionRef.current);
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
      { threshold: 0.1 },
    );

    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }

    return () => {
      observer.disconnect();
      testimonialsObserver.disconnect();
    };
  }, []);

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
        <p className="block md:hidden text-lg sm:text-xl text-gray-400 font-bold tracking-widest my-6 text-center">
          ABOUT ME
        </p>

        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT IMAGE + BLOB */}
          <div className="relative flex justify-center">
            {/* Vertical Line + Text */}
            <div className="absolute -left-8 sm:-left-12 md:-left-15 top-0 h-full hidden md:flex flex-col items-center justify-between">
              {/* Top Dot */}
              <span className="w-2 h-2 bg-black rounded-full"></span>

              {/* Line */}
              <span className="w-px flex-1 bg-black"></span>

              {/* Bottom Dot */}
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span className="mt-15 text-sm text-black tracking-wide -rotate-90 ">
                My Short Story
              </span>
            </div>

            {/* Blob Background */}
            <div className="p-4 sm:p-6 md:p-10">
              <img
                src="/assets/secondImgHero.png"
                alt="Nitish Kumar"
                loading="lazy"
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-[550px]"
                srcSet="/assets/secondImgHero.png 400w, /assets/secondImgHero.png 500w"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 550px"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-base sm:text-lg text-center md:text-left">
            <p className="hidden md:block text-2xl text-gray-400 font-bold tracking-widest my-12">
              ABOUT ME
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 sm:mb-5">
              Hey, I'm Nitish Kumar👋
            </h2>

            <p className="text-black leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <p className="text-black leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing.
            </p>

            {/* CTA BUTTON */}
            <Link to="/contact">
              <button className=" bg-[#0033FF] text-white h-[44px] w-[140px] sm:w-[168px] text-sm sm:text-base font-medium hover:bg-blue-700 transition mx-auto sm:mx-0 block ">
                Get in Touch{" "}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 md:py-15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-20 text-center">
          <div className="bg-[#F4F6FF] rounded-xl py-6 sm:py-8">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              YEAR OF EXPERIENCE
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black">
              <Counter target={4} />
            </h3>
          </div>

          <div className="bg-[#F4F6FF] rounded-xl py-6 sm:py-8">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              PROJECTS FOUNDED
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold  text-black">
              <Counter target={30} />
            </h3>
          </div>

          <div className="bg-[#F4F6FF] rounded-xl py-6 sm:py-8">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              INDUSTRIES SERVED
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold  text-black">
              <Counter target={5} />
            </h3>
          </div>

          <div className="bg-[#F4F6FF] rounded-xl py-6 sm:py-8">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">TEAMS LED</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black">
              <Counter target={50} />
            </h3>
          </div>
        </div>
      </section>

      {/* my Expertise */}
      <section ref={expertiseSectionRef} className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-20">
          <p className="text-gray-400 text-center uppercase tracking-wider mb-2">
            MY SKILLS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-black">
            My Expertise
          </h2>

          <div ref={expertiseRef} className="flex gap-6 overflow-x-hidden">
            {[...expertiseData, ...expertiseData].map((item, i) => (
              <div key={i} className="shrink-0 w-[366px]">
                <div className="bg-[#F4F6FF] rounded-xl p-6 border-b-4 border-[#0033FF]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 mb-4"
                    loading="lazy"
                  />

                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY WORKS */}
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

      {/* MY EXPERIENCE */}
      <section id="experience" className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 text-black">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12"
          >
            MY Experience
          </motion.h2>

          {/* Experience List */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="pb-6 sm:pb-8 mb-6 sm:mb-8 border-b last:mb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
                {/* LEFT BADGE + MOBILE DURATION */}
                <div className="md:col-span-2 flex items-start justify-between w-full">
                  <span className="inline-flex border px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm leading-none">
                    {exp.years}
                  </span>

                  {/* Duration – MOBILE ONLY (RIGHT ALIGNED) */}
                  <span className="md:hidden flex items-center gap-1 text-xs text-gray-500">
                    <Icon icon="iconamoon:clock-light" className="w-4 h-4" />
                    {exp.duration}
                  </span>
                </div>

                {/* CENTER CONTENT */}
                <div className="md:col-span-7">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                    {exp.company}
                  </h3>

                  <p className="mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base">
                    {exp.role}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 text-gray-700">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <Icon
                          icon="bitcoin-icons:verify-filled"
                          className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-gray-500 mt-0.5 shrink-0"
                        />
                        <span className="text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT DATE — DESKTOP ONLY */}
                <div className="hidden md:flex md:col-span-3 md:justify-end items-start gap-2 text-gray-600">
                  <Icon
                    icon="iconamoon:clock-light"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="text-xs sm:text-sm">{exp.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MY GUIDE / JOURNEY SECTION */}
      <section id="guide" className="bg-white text-[#000000]">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-10 sm:pb-12 md:pb-20">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 px-4">
            Explore My Professional Journey And The{" "}
            <br className="hidden md:block" />
            Lessons That Guide My Decisions
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            {/* LEFT TEXT */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="flex gap-3 sm:gap-4 md:gap-6">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold shrink-0">
                  01
                </span>
                <p className="leading-relaxed text-base sm:text-lg md:text-xl">
                  At NovaNectar Smart IT Solutions, our vision is to become a
                  trusted growth partner for businesses by delivering
                  innovation, collaboration and support any time it is needed,
                  big or small.
                </p>
              </div>

              <div className="flex gap-3 sm:gap-4 md:gap-6">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold shrink-0">
                  02
                </span>
                <p className="leading-relaxed text-base sm:text-lg md:text-xl">
                  We aim to be more than just a service provider and want to
                  grow alongside our clients by offering smart IT solutions,
                  creative thinking and dependable teamwork.
                </p>
              </div>

              <div className="flex gap-3 sm:gap-4 md:gap-6">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold shrink-0">
                  03
                </span>
                <p className="leading-relaxed text-base sm:text-lg md:text-xl">
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
              <div className="p-3 sm:p-4 md:p-5">
                <img
                  src="/assets/secondImgHero.png"
                  alt="Guide"
                  className="w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:w-[550px] rounded-2xl object-cover -scale-x-100"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* ================= TESTIMONIALS ================= */}
      <section ref={testimonialsRef} className="bg-[#F6F8FF] py-20">
  <div className="max-w-[1440px] mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-[#1F2A44]">
      Customer Testimonials
    </h2>

    {/* Row 1 */}
    <div ref={row1Ref} className="flex gap-6 overflow-x-hidden mb-10">
      {[...testimonialsData, ...testimonialsData].map((t, i) => (
        <div
          key={`row1-${i}`}
          className="min-w-[280px] sm:min-w-[320px] md:min-w-[420px]"
        >
          <div className="border border-black/60 rounded-xl px-5 py-5 h-full flex flex-col ">
            
            {/* Top Content */}
            <div>
              {/* Stars */}
              <div className="text-[#FFAE0B] text-lg sm:text-xl mb-2 leading-none ">
                {Array.from({length: t.rating}, (_, i) => (
                  <img
                    key={i}
                    src="/assets/testimonialStar.png"
                    alt="star"
                    className="w-6 h-6  inline p-0.5"
                    loading="lazy"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#1F2A44] leading-relaxed mb-4 text-sm sm:text-base">
                {t.text}
              </p>
            </div>

            {/* User info */}
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-[#1F2A44] text-sm sm:text-base">
                  {t.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t.company}
                </p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* Row 2 */}
    <div ref={row2Ref} className="flex gap-6 overflow-x-hidden">
      {[...testimonialsData, ...testimonialsData].map((t, i) => (
        <div
          key={`row2-${i}`}
           className="min-w-[280px] sm:min-w-[320px] md:min-w-[420px]"
        >
          <div className="border border-black/60 rounded-xl px-5 py-5 h-full flex flex-col ">
            
            {/* Top Content */}
            <div>
              <div className="text-[#FFAE0B] text-lg sm:text-xl mb-2 leading-none">
                {Array.from({length: t.rating}, (_, i) => (
                  <img
                    key={i}
                    src="/assets/testimonialStar.png"
                    alt="star"
                    className="w-6 h-6 inline p-0.5"
                    loading="lazy"
                  />
                ))}
              </div>

              <p className="text-[#1F2A44] leading-relaxed mb-4 text-sm sm:text-base">
                {t.text}
              </p>
            </div>

            {/* User info */}
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-[#1F2A44] text-sm sm:text-base">
                  {t.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t.company}
                </p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="bg-white text-black">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 sm:mb-6">
              Let's Talk
            </h2>

            <p className="text-black text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
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
                <Icon
                  icon="proicons:x-twitter"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
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
              className="bg-[#0033FF] text-white h-[44px] w-[140px] sm:w-[168px] text-sm sm:text-base font-medium hover:bg-blue-700 transition mx-auto block "
            >
              Get in Touch
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
