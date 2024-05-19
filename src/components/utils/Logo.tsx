import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="fixed top-10 left-10 z-10">
      <Image src="imgs/logo.svg" width={70} height={70} alt="" priority/>
    </div>
  );
}
