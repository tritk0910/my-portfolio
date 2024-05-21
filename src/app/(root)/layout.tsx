"use client";
import SplashScreen from "@/components/intro/SplashScreen";
import Footer from "@/components/layout/Footer";
import Logo from "@/components/utils/Logo";
import { SmoothScroll } from "@/components/utils/SmoothScroll";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isRepositioned, setIsRepositioned] = useState(false);
  const [isVisible, setIsVisible] = useState(!true);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen
          isRepositioned={isRepositioned}
          setIsRepositioned={setIsRepositioned}
          finishLoading={() => {
            setIsLoading(false);
            setTimeout(() => setIsVisible(true), 10);
          }}
        />
      ) : (
        <>
          <div
            id="bg-black"
            className={`fixed h-screen w-screen transform bg-white transition-opacity duration-500 ${
              isVisible ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          />
          <SmoothScroll>
            <Logo />
            {children}
            <Footer />
          </SmoothScroll>
        </>
      )}
    </>
  );
}
