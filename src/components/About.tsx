import React from "react";
import Heading from "./common/Heading";
import { ABOUT_US_LIST } from "@/utils/helper";
import Description from "./common/Description";
import Image from "next/image";
const About = () => {
  return (
    <div className="relative max-w-[1920px] mx-auto">
      <div className="max-w-[1176px] mx-auto md:px-8 px-4 flex items-center justify-between pt-[145px] max-lg:pt-24 max-sm:pt-[60px] max-lg:pb-[222px] pb-[193px] max-sm:pb-[93px] gap-10 max-lg:gap-[132px] max-sm:gap-20 max-lg:flex-wrap">
        <div>
          <Heading
            text="About Us"
            myClass="pb-7 max-lg:pb-5 max-sm:pb-[35px] relative z-20"
            spanClass="!top-[1.5px]"
          />
          {ABOUT_US_LIST.map((item, i) => (
            <div
              key={i}
              className="flex items-start max-lg:items-center max-sm:items-start gap-5 relative z-20"
            >
              <div className="min-h-[29px] min-w-[29px] rounded-full bg-gradient-to-b max-lg:-mt-3 max-sm:mt-0 from-purple via-pink to-orange flex items-center justify-center">
                {item.icon}
              </div>
              <Description
                text={item.description}
                myClass="lg:max-w-[510px] pb-2 max-lg:pb-3"
              />
            </div>
          ))}
        </div>
        <div className="rounded-full w-[470px] h-[478px] relative max-lg:mx-auto max-md:size-72">
          <Image
            width={470}
            height={478}
            src={"/assets/images/webp/about.webp"}
            alt="about"
            className="z-20 relative"
          />
          <div className="bg-blue-700 absolute -translate-y-1/2 top-1/2 left-0 size-10 rounded-full blur-lg shadow-[0px_0px_1000px_100px] max-md:!shadow-[0px_0px_1000px_60px] max-md:!shadow-blue-700 shadow-blue-700"></div>
          <div className="bg-red-500 absolute -translate-y-1/2 top-1/2 right-0 size-10 rounded-full blur-lg shadow-[0px_0px_1000px_100px] max-md:!shadow-[0px_0px_1000px_60px] max-md:!shadow-red-500 shadow-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
