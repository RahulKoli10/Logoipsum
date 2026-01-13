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
      const triggerPoint = window.innerHeight / 10 * 9; // 90% of viewport height

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
      <section className=" mx-auto mt-20 pb-32 text-black">
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-5xl mb-10">About Me</h1>

          <p className=" leading-relaxed mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            rerum fuga odit natus corporis dolor minus mollitia dolorum vero
            saepe voluptate, veritatis et recusandae molestias molestiae atque
            culpa officiis ea blanditiis aperiam, aspernatur quaerat qui? Soluta
            facilis quia est voluptas cum porro, doloremque id ipsa
            reprehenderit, rerum magnam nemo quae molestias cupiditate
            necessitatibus reiciendis quas quaerat doloribus! Laborum beatae
            asperiores magnam, laudantium labore, excepturi voluptate ducimus
            qui autem facere aut, inventore quasi fugit repudiandae molestias
            voluptatem! Repellendus tempore tempora velit earum quos . Commodi
            in magnam enim, voluptatem, iste ducimus sequi dolorum nulla sit
            placeat earum, aliquam accusamus perspiciatis debitis totam
            voluptates vitae nam corrupti accusantium a sunt voluptatibus.
            Quisquam a odit quam tenetur vel tempore aspernatur, aliquam,
            consequatur numquam, excepturi sapiente corrupti.
          </p>
        </div>
        <div className="w-full overflow-hidden mt-25">
          <div className="marquee">
            <div className="marquee__group">
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
          className="mt-20 text-sm text-gray-400 tracking-widest text-center flex justify-center items-center gap-2"
        >
          SCROLL DOWN
          <span
            ref={arrowRef}
            className="inline-block transition-transform duration-700"
          >
            <Icon icon="solar:arrow-right-outline" width="24" height="24" />
          </span>
        </p>
      </section>

      {/* CEO STORY */}
      <section className=" mx-auto px-15 py-5 grid md:grid-cols-2 gap-14 items-start">
        <div className="space-y-6 md:pr-10 text-[18px]">
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
            pipelines through modern DevOps practices. I don’t just manage
            teams—I empower them to innovate, execute, and deliver products that
            create lasting business impact.
          </p>

          <p className="font-semibold mt-5">My Principles</p>
          <ul className="space-y-2 text-[16px]">
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

        <div className="text-center md:pr-4">
          <img
            src="/assets/aboutsection.png"
            alt="Nitish Kumar"
            className=" mx-auto w-full h-auto max-w-[600px] "
            loading="lazy"
            srcSet="/assets/aboutsection.png 400h, /assets/aboutsection.png 600h"
            sizes="(max-width: 513px) 400px, 600px"
          />
          <p className="mt-2 font-bold text-black">Nitish Kumar</p>
          <p className="mt-2   ">Chief Executive Officer at Novanectar</p>
        </div>
      </section>

      {/* MY JOURNEY */}
      <h3 className="text-3xl font-semibold text-center mt-10">My Journey</h3>
      <section className="mx-auto px-20 py-15 grid md:grid-cols-2 gap-20 items-center">
        <img src="/assets/aboutsection2.png" alt="My Journey" className=" " loading="lazy" srcSet="/assets/aboutsection2.png 606h, /assets/aboutsection2.png 606h" sizes="(max-width: 513px) 400px, 600px" />
        <div className="text-lg leading-[1.8]">
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
      <h3 className="text-3xl font-semibold text-center mt-20">My Purpose</h3>
      <section className="mx-auto px-20 py-15 grid md:grid-cols-2 gap-20 items-center">
        <div className="text-lg leading-[1.8]">
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

        <img src="/assets/aboutsection3.png" alt="My Purpose" className="h-auto w-full max-w-[538px]" loading="lazy" srcSet="/assets/aboutsection3.png 400w, /assets/aboutsection3.png 600w" sizes="(max-width: 768px) 400px, 600px" />
      </section>

      {/* PROVEN IMPACT */}
      <section className=" py-10">
        <div className=" mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-16 text-center">
            Proven Impact
          </h3>

          <div className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing ">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div
                key={i}
                className=" min-w-[260px] p-6 rounded-xl   bg-[#F6F8FF] flex-shrink-0 "
              >
                <h4 className="text-3xl font-bold mb-2">300%+</h4>
                <p className="text-lg font-semibold mb-4">Business Growth</p>
                <p className="text-lg text-gray-600 max-w-80">
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
        className="relative py-32 bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url(/assets/aboutBg.jpg)`, }}
      >
        {/* Dark overlay (ONLY background) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content (stays bright) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Shape the Future With Us?
          </h3>

          <p className="max-w-2xl mx-auto text-gray-300 mb-10">
            As the CEO of Nova, I specialize in aligning technology, strategy,
            and execution to deliver solutions that move businesses forward.
            From product vision to team leadership, I ensure every project is
            built with clarity, purpose, and measurable outcomes. Let’s
            collaborate to convert your goals into breakthrough results.
          </p>
          
          <Link to="/contact">
            <button className="bg-blue-600 px-8 py-3 rounded-md hover:bg-blue-700 transition">
              Let’s Connect
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
