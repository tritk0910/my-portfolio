import { textColor } from "../theme/color";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function Contact(_props, ref) {
  return (
    <section
      className="flex flex-col justify-center items-center gap-6 min-h-screen"
      ref={ref}
    >
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
          className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-heavitas"
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          I can make it
        </motion.h1>
        <motion.h2
          className={`text-3xl md:text-5xl lg:text-7xl font-heavitas ${textColor}`}
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          come true
        </motion.h2>
      </div>
      <motion.div
        className="flex gap-4 flex-col text-sm text-center"
        initial={{ translateY: 30, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-[rgb(255,255,255,0.8)]">
          Shoot me an email if you want to connect!
        </span>
        <a href="mailto:khaitri074@gmail.com">
          <div className="flex justify-center items-center gap-2 tracking-wide] transition hover:text-red-500 text-[rgb(255,255,255,0.8)]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="2.4rem"
              width="2.4rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
            </svg>
            <span className="hidden sm:block">khaitri074@gmail.com</span>
          </div>
        </a>
      </motion.div>
    </section>
  );
});
