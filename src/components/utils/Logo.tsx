import Image from "next/image";
import React from "react";

type Props = {
  isMounted: boolean;
};

export default function Logo({ isMounted }: Props) {
  return (
    <div className="fixed top-10 left-10 z-10">
      <div className="relative">
        <Image src="/svgs/logo.svg" width={70} height={70} alt="" priority />
        <div
          className={`absolute w-full h-full top-0 left-0 p-2 mx-auto -z-10 rounded-full transition-all ease-in-out duration-1000 bg-white ${
            isMounted && "scale-[59]"
          }`}
        />
      </div>
    </div>
  );
}
