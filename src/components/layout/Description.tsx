import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { textColor } from "../theme/color";
import { motion } from "framer-motion";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function Description(_props, ref) {
  const downloadCv = () => {
    const cv = "/downloads/cv.pdf";
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Khai Tri resume.pdf";
    link.click();
  };

  return (
    <section
      className="gap-12 xl:gap-32 justify-center min-h-screen flex flex-col lg:flex-row text-center items-center"
      ref={ref}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={"/imgs/avatar.jpg"}
          width={4000}
          height={4000}
          alt="avt"
          className="rounded-md md:rounded-3xl lg:rounded-full pointer-events-none"
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
      <motion.div
        className="text-left text-md flex flex-col gap-3"
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="font-cocogoose text-2xl xl:text-5xl">
          Hello, I&apos;m <span className={textColor}>Khai Tri</span>
        </h1>
        <p className="text-[rgb(255,255,255,0.7)] text-sm md:text-md xl:text-lg">
          As a recent graduate from the University of Greenwich, I specialize in
          React and its frameworks such as Next.JS, along with TypeScript for
          solid frontend development. I am adept at using Tailwind CSS and SASS
          for polished designs, proficient in managing front-end logic, and
          skilled in API integrations. I am always eager to learn and adapt to
          new technologies to broaden my horizons and contribute effectively to
          any team.
        </p>
        <div className="flex items-center gap-2 md:gap-5 text-red-500 text-sm md:text-md xl:text-lg">
          <div className="flex items-center gap-1">
            <span>My links</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="flex text-[rgb(255,255,255,0.7)] gap-2 md:gap-5">
            <button
              onClick={downloadCv}
              className="transition hover:text-red-500"
            >
              <FontAwesomeIcon icon={faDownload} size="xl" />
            </button>
            <a
              href="https://github.com/tritk0910"
              target="_blank"
              className="transition hover:text-red-500"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
