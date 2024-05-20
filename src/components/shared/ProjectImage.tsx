import { motion } from "framer-motion";
import Image from "next/image";
type Props = { img: string; imgMobile: string; reverse?: boolean };

export default function ProjectImage({ img, imgMobile, reverse }: Props) {
  const reverseValue = reverse ? -100 : 100;
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ translateX: reverseValue, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        width={3000}
        height={3000}
        alt="img"
        className="rounded-xl w-[calc(100%-3rem)]"
      />
      <Image
        src={imgMobile}
        width={3000}
        height={3000}
        alt="img"
        className="rounded-xl shadow-custom absolute -bottom-8 right-0 h-full w-auto"
      />
    </motion.div>
  );
}
