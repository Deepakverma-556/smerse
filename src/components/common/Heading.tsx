import React from "react";
interface HeadingProps {
  text: string;
  myClass?: string;
}

const Heading = ({ text, myClass }: HeadingProps) => {
  return <h2 className={`${myClass} font-black text-5xl leading-[57.6px] tracking-wider max-md:text-4xl max-md:leading-[43.2px] text-white`}>{text}</h2>;
};

export default Heading;
