import Image from "next/image";
import React from "react";

function Card() {
  return (
    <div
      className="
        flex flex-col justify-between 
        w-full  h-4/5
        text-center
        bg-yellow-500
        border-2 border-gray-500
        box-content
        "
    >
      <h2 className="text-lg sm:text-xl text-white m-3  flex-initial font-chicagoflf">
        DiceBear NFT# 5975
      </h2>
      <div
        className="
          -translate-x-8 translate-y-8
          z-10
          bg-white
          flex flex-1
          relative
          before:-z-10
          before:absolute
          before:top-0
          before:left-0
          before:w-full
          before:h-full
        before:bg-yellow-500
          before:border-2 before:border-gray-500
          before:translate-x-4
          before:-translate-y-4
          "
      >
        <div
          className="
            flex flex-col justify-between
            w-full h-full
            bg-white
            border-2 border-gray-500
            "
        >
          <Image
            src="https://avatars.dicebear.com/api/open-peeps/0000000002.svg"
            width="300px"
            height="300px"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
