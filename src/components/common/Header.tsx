import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "../../utils/helper";
import CustomButton from "./CustomButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 700) {
          navbar.classList.add("!bg-black");
        } else {
          navbar.classList.remove("!bg-black");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  })

  return (
    <div id="navbar" className="py-4 max-lg:py-3 max-md:py-2 max-sm:py-[5px] bg-lightGray/50 fixed top-0 w-full z-30">
      <div className="max-w-[1176px] mx-auto px-4 flex items-center justify-between">
        <a href="http://localhost:3000/">
          <img
            src="../assets/images/png/logo.png"
            alt="logo"
            className="size-[68px] max-lg:size-[76px] max-md:size-12 pointer-events-none"
          />
        </a>
        <div className="flex items-center max-lg:hidden gap-[55px] max-xl:gap-7">
          <ul className="flex items-center gap-5 max-xl:gap-4">
            {HEADER_LIST.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-base tracking-[0.87px] leading-[19.2px] text-white transition-all duration-300 hover:text-orange"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <CustomButton text="Mint Now" myClass="max-lg:hidden" />
        </div>
        <div className="flex items-center gap-11 lg:hidden">
          <CustomButton text="Mint Now" myClass="lg:hidden max-md:hidden" />
          <div className={`z-50 cursor-pointer`} onClick={() => setOpen(!open)}>
            <button className="overflow-hidden relative z-50 lg:hidden h-8 w-[39px] max-md:h-6 max-md:w-7 max-sm:w-[14px] max-sm:h-[11.5px] flex flex-col justify-between items-center">
              <span
                className={`bg-white rounded-md w-full h-1 max-sm:h-[2.5px] block transition-all duration-300 ${
                  open ? "translate-x-10" : ""
                }`}
              ></span>
              <span
                className={`bg-white rounded-md after:rounded-lg w-full h-1 max-sm:h-[2.67px] block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:max-sm:h-[2.5px] after:transition-all after:duration-300 transition-all duration-300 ${
                  open ? "rotate-45 after:rotate-90 after:!bg-white" : ""
                }`}
              ></span>
              <span
                className={`bg-white rounded-md w-full h-1 max-sm:h-[2.5px] block transition-all duration-300 ${
                  open ? "-translate-x-10" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full bg-gradient-to-br from-purple to-orange transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-5 flex-col justify-center items-center ${
          open ? "top-0 left-0" : "-top-full"
        }`}
      >
        <ul className="flex items-center gap-4 flex-col">
          {HEADER_LIST.map((item, index) => (
            <li key={index}>
              <a onClick={() => setOpen(false)}
                href={item.link}
                className="text-base leading-[19.2px] tracking-[0.87px] text-white transition-all duration-300 hover:text-orange"
              >
                {item.title}
              </a>
            </li>
          ))}
          <CustomButton customOnClick={() => setOpen(false)} text="Mint Now" myClass="" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
