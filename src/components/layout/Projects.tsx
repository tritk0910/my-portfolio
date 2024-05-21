import { motion } from "framer-motion";
import ProjectListStructure from "../ProjectStructure/ProjectItem";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function Projects(_props, ref) {
  return (
    <section className="text-center max-w-[1400px] mx-auto py-10" ref={ref}>
      <motion.h1
        className="text-2xl font-cocogoose tracking-widest mb-6 xl:mb-10 lg:mb-20 md:text-3xl lg:text-4xl"
        initial={{ translateY: -100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <ProjectListStructure />
    </section>
  );
});
