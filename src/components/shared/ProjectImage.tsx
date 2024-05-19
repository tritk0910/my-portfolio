import Image from "next/image";
type Props = { img: string; imgMobile: string };

export default function ProjectImage({ img, imgMobile }: Props) {
  return (
    <div className="relative w-full h-full">
      <Image
        loading="lazy"
        src={img}
        width={3000}
        height={3000}
        alt="img"
        className="rounded-xl w-[calc(100%-3rem)]"
      />
      <Image
        loading="lazy"
        src={imgMobile}
        width={3000}
        height={3000}
        alt="img"
        className="rounded-xl shadow-mobile absolute -bottom-8 right-0 h-full w-auto"
      />
    </div>
  );
}
