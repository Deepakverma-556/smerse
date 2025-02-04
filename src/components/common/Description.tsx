import React from "react";
interface Descriptionprops {
  text: string;
  myClass?: string;
}
const Description = ({ myClass, text }: Descriptionprops) => {
  return <p className={`${myClass} text-base tracking-[1px] leading-6 text-white`}>{text}</p>;
};

export default Description;
