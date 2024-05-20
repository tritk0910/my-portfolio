"use client";
import anime from "animejs";
import { useEffect } from "react";

export default function Header() {
  const text = "Khai Tri";
  const subText = "Front-end React Developer";

  useEffect(() => {
    const animation = anime.timeline();
    animation
      .add({
        targets: ".author-text span",
        translateY: [150, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (_d, i) => 50 * i + 300,
      })
      .add(
        {
          targets: ".sub-text span",
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 425,
          easing: "easeOutCubic",
          delay: (_d, i) => 50 * i + 300,
        },
        1000
      );
  });

  const splitText = text.split("");
  const splitSubText = subText.split("");

  return (
    <div className="flex flex-col relative min-h-screen justify-center items-center">
      <div className="relative">
        <div className="author-text font-akira pointer-events-none text-9xl tracking-wider overflow-hidden">
          {splitText.map((letter, i) => (
            <span key={i} className="inline-block">
              {letter === " " ? <>&nbsp;</> : letter}
            </span>
          ))}
        </div>
        <div className="sub-text uppercase pointer-events-none tracking-widest absolute -bottom-7 -right-10 font-cocogoose text-2xl ">
          {splitSubText.map((letter, i) => (
            <span key={i} className="inline-block">
              {letter === " " ? <>&nbsp;</> : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
