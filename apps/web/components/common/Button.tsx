import React from "react";

interface ButtonProps {
  text: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

function Button({ text, iconLeft, iconRight }: ButtonProps) {
  return (
    <button
      type="button"
      className="
      min-w-[8rem]
      inline-flex items-center
      rounded-none
      hover:border  border-gray-600
      px-16 py-3
      text-base
      font-chicagoflf
      focus:scale-110
      transition-all ease-in duration-300
      cursor-pointer
      translate-y-1.5 hover:translate-y-0
      translate-x-1.5 hover:translate-x-0
      shadow-[0_0_0_1px_#000,-5px_-5px_0_0_#d8dad9,-5px_-5px_0_1px_#000]
      hover:shadow-none
      "
    >
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
}

export default Button;
