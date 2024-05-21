"use client";
import Contact from "@/components/layout/Contact";
import Description from "@/components/layout/Description";
import Experience from "@/components/layout/Experience";
import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollNavList = [
    {
      title: "Home",
      onClick: () => scrollToRef(headerRef),
    },
    {
      title: "Description",
      onClick: () => scrollToRef(descriptionRef),
    },
    {
      title: "Projects",
      onClick: () => scrollToRef(projectRef),
    },
    {
      title: "Contact",
      onClick: () => scrollToRef(contactRef),
    },
  ];

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let bullets = document.querySelectorAll(".bullet");

    window.onscroll = () => {
      sections.forEach((section, index) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
          bullets.forEach((bullet) => {
            bullet.classList.remove("active");
          });

          bullets[index].classList.add("active");
        }
      });
    };
  });

  return (
    <main>
      <motion.div
        className={`fixed w-screen h-1 top-0 left-0 z-10 bg-red-500`}
        style={{ scaleX: scrollYProgress }}
      />
      <div className="fixed h-screen w-12 lg:w-[150px] top-0 left-0 z-20">
        <div className="flex flex-col h-full gap-11 lg:gap-20 justify-center items-center [&_a]:w-2 [&_a]:h-2 [&_a]:m-[1vw] [&_a]:rounded-full [&_a]:cursor-pointer">
          {scrollNavList.map((item, index) => (
            <a
              className="bullet transition duration-1000 hover:scale-150"
              key={index}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto px-12 md:px-32">
        <Header ref={headerRef} />
        <Description ref={descriptionRef} />
        <Experience />
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
      </div>
    </main>
  );
}
