import Link from "next/link";
import { bgColorOnHover, textColor } from "../theme/color";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-[70vh]">
      <motion.span
        className="uppercase font-cocogoose text-sm tracking-widest text-[rgb(255,255,255,0.7)]"
        initial={{ translateY: -100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Got project in mind?
      </motion.span>
      <div className="text-center">
        <motion.h1
          className="text-7xl font-heavitas"
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          I can make it
        </motion.h1>
        <motion.h2
          className={`text-5xl font-heavitas ${textColor}`}
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          come true
        </motion.h2>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <Link
          href={"/contact"}
          scroll
          className={`flex items-center gap-2 px-7 py-3 bg-gradient-to-tr from-zinc-700 to-zinc-400 transition-all hover:brightness-110 hover:scale-105 ${bgColorOnHover} rounded-lg after:w-full after:h-full relative after:bg-gradient-to-tr after:from-zinc-600 after:to-red-500 after:absolute after:-z-10 after:scale-105 hover:after:opacity-100 after:opacity-0 after:transition-all after:blur-md after:top-0 after:left-0 after:rounded-lg active:brightness-75`}
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
      </motion.div>
    </div>
  );
}
