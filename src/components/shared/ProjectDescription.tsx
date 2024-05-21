import ProjectLink from "./ProjectLink";
import { afterBgColor } from "../theme/color";
import { motion } from "framer-motion";

type Props = {
  project: {
    title: string;
    description: string;
    github: string;
    live?: string;
  };
  reverse?: boolean;
};

export default function ProjectDescription({ project, reverse }: Props) {
  const reverseValue = reverse ? 100 : -100;
  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-4 max-w-[550px] text-sm md:text-base"
      initial={{ translateY: reverseValue, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <h1
        className={`font-heavitas tracking-widest text-4xl relative ${afterBgColor}`}
      >
        {project.title}
      </h1>
      <p className="text-[rgb(255,255,255,0.75)]">{project.description}</p>
      <ProjectLink github={project.github} live={project.live} />
    </motion.div>
  );
}
