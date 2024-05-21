import anime from "animejs";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  isRepositioned: boolean;
  setIsRepositioned: (isRepositioned: boolean) => void;
  finishLoading: () => void;
};

export default function SplashScreen({
  finishLoading,
  isRepositioned,
  setIsRepositioned,
}: Props) {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setIsRepositioned(!isRepositioned);
        setTimeout(() => {
          finishLoading();
        }, 1500);
      },
    });
    loader.add({
      targets: "#logo",
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: 500,
      endDelay: 2500,
    });
  };

  useEffect(() => {
    animate();
  });

  return (
    <div className="bg-white min-h-screen relative">
      <Image
        src="/svgs/logo.svg"
        width={1000}
        height={1000}
        className={`absolute bg-white rounded-full opacity-0 transition-all duration-1000 ease-in-out ${
          !isRepositioned
            ? "w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            : "w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] top-3 left-3 lg:top-10 lg:left-10"
        }`}
        alt="logo"
        id="logo"
      />
    </div>
  );
}
