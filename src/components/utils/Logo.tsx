import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logo() {
  const router = useRouter();

  const handleNavToHome = () => {
    router.push("/");
  };
  return (
    <div className="fixed top-10 left-10 z-10">
      <div className="relative cursor-pointer" onClick={handleNavToHome}>
        <Image src="/svgs/logo.svg" width={70} height={70} alt="" priority />
        <div className="absolute w-full h-full top-0 left-0 p-2 mx-auto -z-10 rounded-full transition-all ease-out bg-white" />
      </div>
    </div>
  );
}
