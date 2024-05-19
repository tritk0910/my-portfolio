import type { Metadata } from "next";
import { Bellota_Text } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/utils/SmoothScroll";
import Logo from "@/components/utils/Logo";

const inter = Bellota_Text({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khai Tri",
  description: "Khai Tri's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-[5000px]`}
        suppressHydrationWarning={true}
      >
        <SmoothScroll>
          <Logo />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
