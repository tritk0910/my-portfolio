"use client";
import Contact from "@/components/layout/Contact";
import Description from "@/components/layout/Description";
import Experience from "@/components/layout/Experience";
import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div
        className={`fixed w-screen h-1 top-0 left-0 z-10 bg-red-500`}
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Description />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
