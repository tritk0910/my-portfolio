import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-[70vh]">
      <span className="uppercase font-cocogoose text-sm tracking-widest">
        Got project in mind?
      </span>
      <div className="text-center">
        <h1 className="text-7xl font-heavitas">I can make it</h1>
        <h2 className="text-5xl font-heavitas bg-gradient-to-tr from-red-500 to-amber-500 bg-clip-text text-transparent">
          come true
        </h2>
      </div>
      <Link
        href={"/contact"}
        className="flex text-sm items-center gap-2 px-5 py-2 rounded-md bg-neutral-600 transition-all hover:bg-[rgba(255,255,255,0.5)]"
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
