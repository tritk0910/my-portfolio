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
      duration: 1000,
    });
    loader.add({
      targets: "#logo",
      opacity: [1, 1],
      easing: "easeOutCubic",
      delay: 1000,
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
            ? "w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            : "w-[70px] h-[70px] left-10 top-10"
        }`}
        alt="logo"
        id="logo"
      />
    </div>
  );
}
