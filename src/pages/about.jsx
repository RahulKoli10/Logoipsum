import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Nav.jsx";
import QueryModal from "../components/QueryModal.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
const About = () => {
  const arrowRef = useRef(null);
  const containerRef = useRef(null);

  const expertiseRef = useRef(null);

  useEffect(() => {
    let currentRotation = 0;
    let targetRotation = 0;
    let rafId = null;

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

    const animate = () => {
      // easing (lerp)
      currentRotation += (targetRotation - currentRotation) * 1;

      if (arrowRef.current) {
        arrowRef.current.style.transform = `rotate(${currentRotation}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const triggerPoint = (window.innerHeight / 10) * 9; // 90% of viewport height

      if (rect.top > triggerPoint) {
        targetRotation = 0;
        return;
      }

      const distance = triggerPoint - rect.top;
      targetRotation = Math.min(distance / 3, 90);
    };

    window.addEventListener("scroll", handleScroll);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const [openQuery, setOpenQuery] = useState(false);
  return (
    <main className="bg-white text-black text-lg">
      <Navbar onOpenQuery={() => setOpenQuery(true)} />

      {openQuery && <QueryModal onClose={() => setOpenQuery(false)} />}

      {/* HERO INTRO */}
      <section className="mx-auto mt-6 sm:mt-8 md:mt-10 pb-12 sm:pb-16 md:pb-20 text-black">
        <div className="mx-auto max-w-360 px-4 sm:px-5 lg:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5">About Me</h1>

          <p className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis odio fermentum, condimentum purus vitae, congue felis. Duis nec
            efficitur odio, pharetra aliquet lectus. In dapibus, risus vitae
            volutpat rutrum, nisi nisl maximus nulla, maximus gravida est justo
            nec risus. Aliquam erat volutpat. Aliquam vitae mollis elit, quis
            sagittis massa. Aenean non nisi ut erat tincidunt placerat. Ut
            sagittis enim ut leo hendrerit, id interdum nulla viverra. Praesent
            vel egestas ligula, non suscipit odio. Sed nec erat ac ante mattis
            tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque quis odio fermentum, condimentum purus vitae, congue felis.
            Duis nec efficitur odio, pharetra aliquet lectus. In dapibus, risus
            vitae volutpat rutrum, nisi nisl maximus nulla, maximus gravida est
            justo nec risvus.
          </p>
        </div>
        <div className="w-full overflow-hidden mt-8 sm:mt-12 md:mt-15 ">
          <div className="marquee ">
            <div className="marquee__group ">
              <span>CHIEF EXECUTIVE OFFICER.</span>
              <span>CHIEF EXECUTIVE OFFICER.</span>
              <span>CHIEF EXECUTIVE OFFICER.</span>
            </div>

            <div className="marquee__group">
              <span>CHIEF EXECUTIVE OFFICER.</span>
              <span>CHIEF EXECUTIVE OFFICER.</span>
              <span>CHIEF EXECUTIVE OFFICER.</span>
            </div>
          </div>
        </div>

        <p
          ref={containerRef}
          className="mt-12 sm:mt-16 md:mt-20 text-xs sm:text-sm text-gray-500 tracking-widest text-center flex justify-center items-center gap-2"
        >
          SCROLL DOWN
          <span
            ref={arrowRef}
            className="inline-block transition-transform duration-700"
          >
            <Icon icon="solar:arrow-right-outline" className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        </p>
      </section>

      {/* CEO STORY */}
      <section className="max-w-360 mx-auto px-4 sm:px-5 md:px-10 lg:px-15 py-8 sm:py-10 md:py-12 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-start">
        <div className="space-y-4 sm:space-y-6 md:pr-6 lg:pr-10 text-sm sm:text-base md:text-[16px] lg:text-[18px]">
          <p>
            As a CEO, I lead at the intersection of technology, innovation, and
            business strategy. With a background in building AI-powered SaaS
            platforms, 3D virtual experiences, and enterprise-scale digital
            products, I bring a unique blend of technical expertise and
            visionary leadership to every project. My focus is on transforming
            complex challenges into scalable, intuitive, and high-impact
            solutions that elevate both user experience and business value..
          </p>

          <p>
            My leadership approach combines strategic decision-making with a
            deep understanding of modern engineering. From guiding teams in
            developing Retrieval-Augmented Generation (RAG) systems and
            optimizing WebGL for immersive 3D environments to architecting
            type-safe monorepos and scalable platform infrastructures,
          </p>
          <p>
            What defines my leadership is my ability to oversee the entire
            technology lifecycle: shaping system architecture, directing product
            vision, integrating AI capabilities, and ensuring efficient delivery
            pipelines through modern DevOps practices. I don't just manage
            teams I empower them to innovate, execute, and deliver products that
            create lasting business impact.
          </p>

          <p className="font-semibold mt-4 sm:mt-5">My Principles</p>
          <ul className="space-y-2 text-sm sm:text-[15px] md:text-[16px]">
            <li className="flex items-start gap-3">
              <Icon
                icon="teenyicons:tick-circle-solid"
                width="16"
                height="16"
                className="text-blue-600 mt-1"
              />
              <p>
                <span className="font-semibold text-blue-600">Simplicity:</span>{" "}
                Great products are built by removing the unnecessary.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <Icon
                icon="teenyicons:tick-circle-solid"
                width="16"
                height="16"
                className="text-blue-600 mt-1"
              />
              <p>
                <span className="font-semibold text-blue-600">Empathy:</span>{" "}
                Understanding users deeply is the foundation of good design.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <Icon
                icon="teenyicons:tick-circle-solid"
                width="16"
                height="16"
                className="text-blue-600 mt-1"
              />
              <p>
                <span className="font-semibold text-blue-600">Integrity:</span>{" "}
                I believe in honest work, clear communication, and long-term
                thinking.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <Icon
                icon="teenyicons:tick-circle-solid"
                width="16"
                height="16"
                className="text-blue-600 mt-1"
              />
              <p>
                <span className="font-semibold text-blue-600">Growth:</span> I
                constantly learn, experiment, and push myself to improve.
              </p>
            </li>
          </ul>
        </div>

        <div className="text-center md:pr-4 mt-6 md:mt-0">
          <img
            src="/assets/aboutsection.png"
            alt="Nitish Kumar"
            className="mx-auto w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            loading="lazy"
            srcSet="/assets/aboutsection.png 400w, /assets/aboutsection.png 600w"
            sizes="(max-width: 513px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
          />
          <p className="mt-3 sm:mt-4 font-bold text-black text-l sm:text-base">Nitish Kumar</p>
          <p className="mt-1 sm:mt-2 text-xl sm:text-sm md:text-xl">Chief Executive Officer at Novanectar</p>
        </div>
      </section>

      {/* MY JOURNEY */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-8 sm:mt-10 px-4">My Journey</h3>
      <section className="max-w-360 mx-auto px-4 sm:px-5 md:px-10 lg:px-20 py-10 sm:py-12 md:py-15 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
        <img
          src="/assets/aboutsection2.png"
          alt="My Journey"
          className="w-full h-auto"
          loading="lazy"
          srcSet="/assets/aboutsection2.png 400w, /assets/aboutsection2.png 600w"
          sizes="(max-width: 768px) 400px, 600px"
        />
        <div className="text-sm sm:text-base md:text-lg leading-[1.6] sm:leading-[1.8]">
          <p className=" mb-4">
            My career began with a simple curiosity: Why do some digital
            experiences feel effortless while others frustrate us? This
            curiosity led me into UI/UX, where I found my passion for improving
            the way people interact with technology.
          </p>

          <p className=" mb-4">
            Over the years, I’ve worked on websites, apps, and dashboards —
            learning what truly matters for users. Today, as a CEO, I combine my
            design mindset with leadership to build products that are not only
            beautiful but genuinely useful.
          </p>

          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis odio fermentum, condimentum purus vitae, congue felis. Duis nec
            efficitur odio, pharetra aliquet lectus. In dapibus, risus vitae
            volutpat rutrum, nisi nisl maximus nulla, maximus gravida est justo
            nec risus. Aliquam erat volutpat. Aliquam vitae mollis elit, quis
            sagittis massa. Aenean non nisi ut erat tincidunt placerat. Ut
            sagittis enim ut leo hendrerit, id interdum nulla viverra.
          </p>
          <p className=" mb-4">
            Over the years, I’ve worked on websites, apps, and dashboards —
            learning what truly matters for users. Today, as a CEO, I combine my
            design mindset with leadership to build products that are not only
            beautiful but genuinely useful.
          </p>
          <p className="mb-4">
            Over the years, I’ve worked on websites, apps, and dashboards —
            learning what truly matters for users. Today, as a CEO, I combine my
            design mindset with leadership to build products that are not only
            beautiful but genuinely useful.{" "}
          </p>
        </div>
      </section>

      {/* MY PURPOSE */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-12 sm:mt-16 md:mt-20 px-4">My Purpose</h3>
      <section className="max-w-360 mx-auto px-4 sm:px-5 md:px-10 lg:px-20 py-10 sm:py-12 md:py-15 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
        <div className="text-sm sm:text-base md:text-lg leading-[1.6] sm:leading-[1.8]">
          <p className="  mb-5">
            I am driven by a desire to solve real problems. Every project I take
            on is guided by one question: How can we make this experience better
            for the user? My purpose is to remove complexity, create clarity,
            and design digital products that deliver long-term value.
          </p>

          <p className=" mb-5">
            My leadership approach combines strategic decision-making with a
            deep understanding of modern engineering. From guiding teams in
            developing Retrieval-Augmented Generation (RAG) systems and
            optimizing WebGL for immersive 3D environments to architecting
            type-safe monorepos.
          </p>

          <p className="  mb-5">
            Ut in risus venenatis leo molestie elementum. Nullam urna metus,
            gravida sed lacus id, volutpat ullamcorper eros. Suspendisse mattis
            gravida quam a dictum. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Mauris at aliquet nibh.
            Donec bibendum eros vitae risus congue dignissim. Donec magna lacus,
            gravida et aliquam eget, pretium sit amet purus. Vestibulum
            imperdiet a leo eu fringilla.
          </p>
          <p className=" ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis odio fermentum, condimentum purus vitae, congue felis. Duis nec
            efficitur odio, pharetra aliquet lectus. In dapibus, risus vitae
            volutpat rutrum, nisi nisl maximus nulla, maximus gravida est justo
            nec risus. Aliquam erat volutpat.
          </p>
        </div>

        <img
          src="/assets/aboutsection3.png"
          alt="My Purpose"
          className="h-auto w-full max-w-[590px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[538px] mx-auto md:mx-0"
          loading="lazy"
          srcSet="/assets/aboutsection3.png 400w, /assets/aboutsection3.png 600w"
          sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 538px"
        />
      </section>

      {/* PROVEN IMPACT */}
      <section className="py-8 sm:py-10">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-12 md:mb-16 text-center">
            Proven Impact
          </h3>

          <div
            ref={expertiseRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing"
          >
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div
                key={i}
                className="min-w-[240px] sm:min-w-[260px] p-4 sm:p-6 rounded-xl bg-[#F6F8FF] flex-shrink-0"
              >
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">300%+</h4>
                <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Business Growth</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-80">
                  Scaled company operations and revenue through strategic
                  decision-making and long-term planning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(/assets/aboutBg.jpg)` }}
      >
        {/* Dark overlay (ONLY background) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content (stays bright) */}
        <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Shape the Future With Us?
          </h3>

          <p className="max-w-2xl mx-auto text-gray-300 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
            As the CEO of Nova, I specialize in aligning technology, strategy,
            and execution to deliver solutions that move businesses forward.
            From product vision to team leadership, I ensure every project is
            built with clarity, purpose, and measurable outcomes. Let's
            collaborate to convert your goals into breakthrough results.
          </p>

          <Link to="/contact">
            <button className="bg-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition text-sm sm:text-base">
              Let's Connect
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
