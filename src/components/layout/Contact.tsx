import Link from "next/link";
import { bgColorOnHover, textColor } from "../theme/color";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-[70vh]">
      <span className="uppercase font-cocogoose text-sm tracking-widest">
        Got project in mind?
      </span>
      <div className="text-center">
        <h1 className="text-7xl font-heavitas">I can make it</h1>
        <h2 className={`text-5xl font-heavitas ${textColor}`}>come true</h2>
      </div>
      <Link
        href={"/contact"}
        scroll
        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-zinc-700 to-zinc-400 transition-all hover:brightness-110 hover:scale-105 ${bgColorOnHover} rounded-lg after:w-full after:h-full relative after:bg-gradient-to-tr after:from-zinc-600 after:to-red-500 after:absolute after:-z-10 after:scale-105 hover:after:opacity-100 after:opacity-0 after:transition-all after:blur-md after:top-0 after:left-0 after:rounded-lg active:brightness-75`}
      >
        <span>Get in touch</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </Link>
    </div>
  );
}
