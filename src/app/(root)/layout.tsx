"use client";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/splashscreen/SplashScreen";
import Logo from "@/components/utils/Logo";
import { SmoothScroll } from "@/components/utils/SmoothScroll";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const [isRepositioned, setIsRepositioned] = useState(false);

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen
          isRepositioned={isRepositioned}
          setIsRepositioned={setIsRepositioned}
          finishLoading={() => {
            setIsLoading(false);
          }}
        />
      ) : (
        <SmoothScroll>
          <Logo isMounted={isRepositioned} />
          {children}
          <Footer />
        </SmoothScroll>
      )}
    </>
  );
}
