import React from "react";

interface CustomButtonProps {
  myClass?: string;
  text: string;
  customOnClick?: () => void;
}
const CustomButton = ({ myClass, text, customOnClick }: CustomButtonProps) => {
  return (
    <button
      onClick={customOnClick}
      className={`${myClass} rounded-lg tracking-[0.87px] py-[11px] px-[25.07px] shadow-[inset_0px_4px_4px_0px] hover:scale-95 transition-all duration-300 shadow-lightOrange bg-gradient-to-b from-purple via-pink to-orange font-extrabold text-white text-xl max-sm:text-base max-sm:leading-[19.2px] leading-6`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
