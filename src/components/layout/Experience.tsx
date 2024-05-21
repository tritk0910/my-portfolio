import Image from "next/image";
import { languageList } from "../experiences/languageList";
import { motion } from "framer-motion";

export default function Experience() {
  const itemStyling =
    "[&_li]:px-4 md:[&_li]:px-7 lg:[&_li]:px-10 py-3 [&_img]:max-w-[40px] lg:[&_img]:max-w-[60px] xl:[&_img]:max-w-[80px] flex animate-slide w-fit";

  return (
    <div className="flex flex-col gap-4 text-center my-10 xl:my-20">
      <motion.h1
        className="text-2xl font-cocogoose tracking-widest mb-6 xl:mb-10 lg:mb-20 md:text-3xl lg:text-4xl"
        initial={{ translateY: -100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Used at work
      </motion.h1>
      <motion.div
        className="max-w-[200px] md:max-w-[550px] lg:max-w-[750px] xl:max-w-[1150px] h-full mx-auto overflow-hidden wrapper whitespace-nowrap"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
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
