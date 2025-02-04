import React from "react";
import Heading from "./common/Heading";
import { ABOUT_US_LIST } from "@/utils/helper";
import Description from "./common/Description";
import Image from "next/image";
const About = () => {
  return (
    <div className="relative max-w-[1920px] mx-auto overflow-hidden">
      <div className="max-w-[1176px] mx-auto md:px-8 px-4 flex items-center justify-between pt-[189px] max-lg:pt-24 max-sm:pt-[60px] max-lg:pb-[214px] pb-[272px] max-sm:pb-[93px] gap-10 max-lg:gap-[132px] max-sm:gap-20 max-lg:flex-wrap">
        <div>
          <Heading
            text="About Us"
            myClass="pb-7 max-lg:pb-5 max-sm:pb-[35px] relative z-20"
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
        <Image
          src={"/assets/images/webp/about-us.webp"}
          alt="about"
          width={954}
          height={690}
          className="pointer-events-none max-lg:mx-auto lg:hidden"
        />
      </div>
      <Image
        src={"/assets/images/webp/about-us.webp"}
        alt="about"
        width={954}
        height={690}
        className="pointer-events-none max-lg:mx-auto max-lg:hidden absolute top-11 right-0 max-lg:-left-40 max-xl:-right-32 max-lg:top-[412px]"
      />
    </div>
  );
};

export default About;
