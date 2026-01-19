import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const Hero = () => {
  return (
    <section className="font-dm bg-[#F6F8FF] md:min-h-[650px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full md:w-auto pt-6 md:pt-10 order-2 md:order-1 text-center md:text-left">
          <p className="text-base sm:text-lg text-black mb-2">
            Hey, I'm Nitish Kumar
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black tracking-wider ">
            Co-founder <br />
            at <span className="text-[#0033FF] font-extrabold">NovaNectar</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg text-base sm:text-lg md:text-xl text-center md:text-left">
            Building meaningful products, leading high-performing teams and
            driving long-term growth ↓
          </p>

          {/* CTA + SOCIAL */}
          <div className="mt-6 flex flex-col gap-6 ">
            <Link to="/contact">
              <button className="bg-[#0033FF] text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg hover:bg-blue-700 transition font-medium ">
                Get in Touch
              </button>
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex w-fit ">
              {/* LinkedIn */}
              <span
                className="
      w-12 h-12
      flex items-center justify-center 
      bg-white/40
      backdrop-blur-md
      shadow-[0px_0px_6px_rgba(204,199,199,0.87),inset_0px_1px_1px_rgba(255,255,255,0.9)]
    "
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
                </a>
              </span>

              <span className="w-4 bg-[#F6F8FF]" />

              {/* Instagram */}
              <span
                className="
      w-12 h-12
      flex items-center justify-center 
      bg-white/40
      backdrop-blur-md
      shadow-[0px_0px_6px_rgba(204,199,199,0.87),inset_0px_1px_1px_rgba(255,255,255,0.9)]
    "
              >
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="h-6 w-6"
                  />
                </a>
              </span>

              <span className="w-4 bg-[#F6F8FF]" />

              {/* Twitter / X */}
              <span
                className="
      w-12 h-12
      flex items-center justify-center 
      bg-white/40
      backdrop-blur-md
      shadow-[0px_0px_6px_rgba(204,199,199,0.87),inset_0px_1px_1px_rgba(255,255,255,0.9)]
    "
              >
                <a href="https://www.x.com" target="_blank" rel="noreferrer">
                  <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center mt-6 sm:mt-8 md:mt-0 w-full md:w-auto order-1 md:order-2">
          <div className="relative">
            {/* Starframer – hidden on mobile */}
            <img
              src="/assets/starframers.svg"
              alt=""
              className="hidden md:block absolute -right-4 -top-7 z-10"
            />

            <img
              src="/assets/heroImg.svg"
              alt="CEO"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
