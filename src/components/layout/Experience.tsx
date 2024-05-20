import Image from "next/image";
import { languages } from "../experiences/languageList";

export default function Experience() {
  const itemStyling =
    "[&_li]:px-10 py-3 [&_img]:max-w-[100px] flex py-4 animate-slide w-fit";

  return (
    <div className="mb-32 flex flex-col gap-4 text-center">
      <h1 className="text-3xl font-cocogoose tracking-widest">
        I have experienced with
      </h1>
      <div className="max-w-[1050px] h-full mx-auto overflow-hidden wrapper whitespace-nowrap">
        <div className="inline-block">
          <ul className={itemStyling}>
            {languages.map((experience, index) => (
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
            {languages.map((experience, index) => (
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
      </div>
    </div>
  );
}
