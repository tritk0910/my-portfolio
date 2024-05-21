import { motion } from "framer-motion";
import Image from "next/image";
type Props = { img: string; imgMobile: string; reverse?: boolean };

export default function ProjectImage({ img, imgMobile, reverse }: Props) {
  const reverseValue = reverse ? -100 : 100;
  return (
    <motion.div
      className="relative w-full h-full flex justify-center xl:block"
      initial={{ translateY: reverseValue, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        width={5000}
        height={5000}
        alt="img"
        className="rounded-xl w-[calc(100%-3rem)] hidden xl:block"
      />
      <Image
        src={imgMobile}
        width={5000}
        height={5000}
        alt="img"
        className="rounded-xl shadow-custom xl:absolute -bottom-8 right-0 h-full w-auto"
      />
    </motion.div>
  );
}
