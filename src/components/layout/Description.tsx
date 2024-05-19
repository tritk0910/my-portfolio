import Image from "next/image";
import React from "react";

export default function Description() {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto gap-36 p-20 flex text-center items-center">
      <div className="flex flex-col items-center cols-a">
        <Image
          src={"/imgs/avatar.jpg"}
          width={4000}
          height={4000}
          alt="avt"
          loading="lazy"
          className="rounded-full pointer-events-none"
        />
      </div>
      <div className="text-left text-md min-w-[350px] flex flex-col gap-3">
        <h1 className="font-cocogoose text-5xl">
          Hello, I am{" "}
          <span
            className="
        bg-gradient-to-tr from-red-500 to-amber-500 bg-clip-text text-transparent"
          >
            Khai Tri
          </span>
        </h1>
        <span className="text-[rgb(255,255,255,0.7)]">
          As a recent graduate from the University of Greenwich, I specialize in
          React and its frameworks such as Next.JS, along with TypeScript for
          solid frontend development. I am adept at using Tailwind CSS and SASS
          for polished designs, proficient in managing front-end logic, and
          skilled in API integrations. I am always eager to learn and adapt to
          new technologies to broaden my horizons and contribute effectively to
          any team.
        </span>
      </div>
    </div>
  );
}
