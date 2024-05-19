"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
};

export const SmoothScroll = ({ children }: Props) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
