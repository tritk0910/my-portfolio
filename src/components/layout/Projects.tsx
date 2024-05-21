import { motion } from "framer-motion";
import ProjectListStructure from "../ProjectStructure/ProjectItem";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function Projects(_props, ref) {
  return (
    <section className={`py-20 text-center max-w-[1400px] mx-auto`} ref={ref}>
      <motion.h1
        className="text-3xl font-cocogoose tracking-widest mb-20"
        initial={{ translateY: -100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Here is some of my worked or working project
      </motion.h1>
      <ProjectListStructure />
    </section>
  );
});
