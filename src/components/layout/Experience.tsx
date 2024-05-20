import Image from "next/image";
import { languageList } from "../experiences/languageList";
import { motion } from "framer-motion";

export default function Experience() {
  const itemStyling =
    "[&_li]:px-10 py-3 [&_img]:max-w-[100px] flex py-4 animate-slide w-fit";

  return (
    <div className="mb-32 flex flex-col gap-4 text-center">
      <motion.h1
        className="text-3xl font-cocogoose tracking-widest"
        initial={{ translateY: -100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        I have experienced with
      </motion.h1>
      <motion.div
        className="max-w-[1050px] h-full mx-auto overflow-hidden wrapper whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          <ul className={itemStyling}>
            {languageList.map((experience, index) => (
              <li key={index}>
                <Image
                  src={experience.src}
                  width={1000}
                  height={1000}
                  alt={experience.icon}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="inline-block">
          <ul className={itemStyling}>
            {languageList.map((experience, index) => (
              <li key={index}>
                <Image
                  src={experience.src}
                  width={1000}
                  height={1000}
                  alt={experience.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
