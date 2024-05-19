import Image from "next/image";
import { experiencedWith } from "../experiences/experiences";

export default function Experience() {
  return (
    <div className="mb-32 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl font-cocogoose tracking-widest">
        I have experienced with
      </h1>
      <div className="flex gap-2">
        {experiencedWith.map((item, index) => (
          <div
            key={index}
            className="rounded-full flex justify-center items-center p-3 bg-white"
          >
            <Image src={item.src} width={30} height={30} alt={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
