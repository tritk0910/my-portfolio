import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="fixed top-3 left-3 lg:top-10 lg:left-10 z-30">
      <div className="relative cursor-pointer">
        <Image src="/svgs/logo.svg" width={50} height={50} alt="" priority className="xl:w-[70px] xl:h-[70px]" />
        <div className="absolute w-full h-full top-0 left-0 p-2 mx-auto -z-10 rounded-full transition-all ease-out bg-white" />
      </div>
    </div>
  );
}
