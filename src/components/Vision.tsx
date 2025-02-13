import React from "react";
import Heading from "./common/Heading";
import { VISION_LIST } from "@/utils/helper";
import Description from "./common/Description";

const Vision = () => {
  return (
    <>
      <div id="vision" className="max-w-[1176px] mx-auto px-8 max-sm:px-4">
        <Heading text="THE VISION" myClass="!mx-auto" />
        <div className="flex flex-wrap -mx-3 pt-[138px] max-lg:pt-32 max-sm:pt-[88px]">
          {VISION_LIST.map((item, i) => (
            <div
              key={i}
              className={`w-1/3 px-3 max-lg:px-4 max-lg:w-1/2 max-sm:w-full ${
                i === 1
                  ? "max-sm:pt-[88px]"
                  : i === 2
                  ? "max-lg:pt-[84px] max-sm:pt-[88px]"
                  : ""
              }`}
            >
              <div className="relative bg-gradient-to-b cursor-pointer from-purple via-pink to-orange rounded-[10px] h-full p-[1px] group">
                <div className="bg-gray rounded-[10px] px-7 max-sm:px-4 pt-[90px] pb-8 h-full hover:bg-transparent">
                  <Description
                    text={item.description}
                    myClass="leading-[27.2px] text-center"
                  />
                </div>
                <div className="size-24 max-sm:size-[86px] absolute rounded-full top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple via-pink to-orange p-[1px]">
                  <div className="w-full h-full bg-gray rounded-full flex items-center justify-center group-hover:bg-transparent">
                    <Heading text={item.title} myClass="max-lg:!text-4xl" spanClass="max-lg:!text-4xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vision;
