import React from "react";
import Header from "./common/Header";
import CustomButton from "./common/CustomButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url(/assets/images/webp/hero-bg.webp)] bg-cover bg-no-repeat">
      <Header />
      <div className="max-w-[1176px] mx-auto px-4 pt-[152px] pb-[50px] max-sm:pt-28 max-sm:pb-[85px]">
        <Image
          src={"/assets/images/webp/hero.webp"}
          alt="hero"
          width={404}
          height={241}
          className="mx-auto pointer-events-none max-lg:max-w-[388px] max-lg:h-[241px] max-md:h-40 max-md:max-w-[300px] max-sm:max-w-64 max-sm:h-[154px]"
        />
        <h1 className="font-black text-8xl tracking-[3px] max-md:text-7xl max-sm:text-[40px] max-sm:leading-[48px] leading-[115.2px] text-white text-center pt-8 pb-[10px] max-sm:pt-[108px] max-sm:pb-7">
          SMERSE
        </h1>
        <p className="text-4xl tracking-[3px] max-sm:tracking-[1px] max-md:text-3xl max-sm:text-xl max-sm:leading-[30px] font-semibold leading-[54px] max-w-[637px] mx-auto text-center text-white">
          FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
        </p>
        <CustomButton
          text="Get Started"
          myClass="!px-[28.6px] !py-4 !mx-auto !flex max-sm:!py-[12.4px] max-sm:!px-[25.1px] mt-11 max-sm:!mt-[82px]"
        />
      </div>
      <div className="bg-gradient-to-b from-purple via-pink to-orange h-10 shadow-[0px_0px_15.01px_0px_] shadow-white/50"></div>
    </div>
  );
};

export default Hero;
