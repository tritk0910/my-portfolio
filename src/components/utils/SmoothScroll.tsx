"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const SmoothScroll = ({ children }: Props) => {
  const pathname = usePathname();

  // Scroll to top when reloading the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
