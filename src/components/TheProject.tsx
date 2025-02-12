import { PROJECTS_LIST } from "@/utils/helper";
import React from "react";
import Description from "./common/Description";
import Heading from "./common/Heading";
import Image from "next/image";

const TheProject = () => {
  return (
    <div id="project" className="pt-[130px] max-lg:pt-[140px] max-sm:pt-[67px]">
      <div className="max-w-[1172px] mx-auto px-8 max-sm:px-4">
        <div className="flex flex-wrap -mx-3 items-center justify-between">
          <div className="w-1/2 px-3 max-lg:w-full">
            <Heading text="THE PROJECT" myClass="pb-5 max-sm:pb-[35px]" />
            {PROJECTS_LIST.map((obj, i) => (
              <div key={i} className="flex gap-5">
                <div className="h-[29px] min-w-[29px] bg-gradient-to-b from-purple via-pink to-orange rounded-full flex items-center justify-center">
                  {obj.icon}
                </div>
                <Description text={obj.description} myClass="pb-[8px]" />
              </div>
            ))}
          </div>
          <Image
            width={471}
            height={626}
            src={"/assets/images/webp/girl.webp"}
            alt="girl"
            className="max-lg:mx-auto max-lg:mt-[53px] max-sm:mt-10 max-sm:h-[476px] max-sm:w-[358px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TheProject;
