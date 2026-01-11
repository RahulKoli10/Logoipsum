// import HeroImg from "../assets/hero.png";
// import Twitter from "../assets/twitter.svg";
import { Icon } from "@iconify/react";
// import HeroImg from "../assets/heroImg.svg";
import { Link } from "react-router-dom";
// import LinkedIn from "../assets/linkedin.svg";
// import GitHub from "../assets/github.svg";

const Hero = () => {
  return (
    <section className="font-dm bg-[#F6F8FF]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-22">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p className="text-lg text-black mb-2">Hey, I'm Nitish Kumar</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            CEO & Strategic Leader <br />
            at <span className="text-blue-600">NovaNectar</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg text-2xl">
            Building meaningful products, leading high-performing teams,and
            driving long-term growth with clarity & strategy ↓.
          </p>

          {/* CTA + SOCIAL */}
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <Link to="/contact" >
                  <button className="bg-blue-600 text-white px-10 py-4 text-lg font-semibold hover:bg-blue-700 transition border-neutral-900">
                    Get in Touch
              </button>
              </Link>
            </div>
            <div className="bg-white  shadow-md rounded-md flex w-fit overflow-hidden">
              <div className="w-14 h-14 flex items-center justify-center ">
                <Link className="cursor-pointer" to="https://www.linkedin.com/"><Icon  icon="mdi:linkedin" width="24" height="24" /></Link>
              </div>
              <span className="w-4 bg-neutral-100"></span>

              <div className="w-14 h-14 flex items-center justify-center  ">
              <Link className="cursor-pointer" to="https://www.instagram.com"><Icon icon="mdi:instagram" width="24" height="24" /></Link>
              </div>
               <span className="w-4 bg-neutral-100"></span>
              <div className="w-14 h-14 flex items-center justify-center">
                <Link className="cursor-pointer" to="https://www.x.com"><Icon icon="ri:twitter-x-line" width="24" height="24" /></Link>
              </div>
               {/* <span className="w-4 bg-neutral-100"></span> */}
               {/* <div className="w-14 h-14 flex items-center justify-center">
                
              </div> */}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-xl relative">
                       <img src="/assets/starframers.svg" alt="" className="absolute -right-4 -top-7 z-10" />

            <img
                src="/assets/heroImg.svg"
                alt="CEO"
                className="w-[260px] md:w-[500px] rounded-xl object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
