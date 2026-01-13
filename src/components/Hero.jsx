import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const Hero = () => {
  return (
    <section className="font-dm bg-[#F6F8FF]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-22">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p className="text-lg text-black mb-2">Hey, I'm Nitish Kumar</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Co-founder <br />
            at <span className="text-[#0033FF]">NovaNectar</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg text-2xl">
            Building meaningful products, leading high-performing teams,and
            driving long-term growth with clarity & strategy ↓.
          </p>

          {/* CTA + SOCIAL */}
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <Link to="/contact" >
                  <button className="bg-[#0033FF] text-white px-10 py-3 text-lg hover:bg-blue-700 transition border-neutral-900 font-medium">
                    Get in Touch
              </button>
              </Link>
            </div>
       <div className="flex w-fit bg-[#FFFFFF] w-[155px] ">
  <span className="w-14 h-14 flex items-center justify-center shadow-[2px_2px_4px_rgba(0,0,0,0.15)]">
    <Link to="https://www.linkedin.com/" target="_blank">
      <img src={linkedinIcon} alt="LinkedIn" className="h-7 w-7" />
    </Link>
  </span>

  <span className="w-4 bg-[#F6F8FF]"></span>

  <span className="w-14 h-14 flex items-center justify-center shadow-[2px_2px_4px_rgba(0,0,0,0.15)]">
    <Link to="https://www.instagram.com" target="_blank">
      <img src={instagramIcon} alt="Instagram" className="h-7 w-7" />
    </Link>
  </span>

  <span className="w-4 bg-[#F6F8FF]"></span>

  <span className="w-14 h-14 flex items-center justify-center shadow-[2px_2px_4px_rgba(0,0,0,0.15)]">
    <Link to="https://www.x.com" target="_blank">
      <img src={twitterIcon} alt="Twitter" className="h-7 w-7" />
    </Link>
  </span>
</div>



          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-xl relative">
            <img src="/assets/starframers.svg" alt="" className="absolute -right-4 -top-7 z-10" loading="lazy" />

            <img
                src="/assets/heroImg.svg"
                alt="CEO"
                className="w-[260px] md:w-[500px] rounded-xl object-cover"
                loading="lazy"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
