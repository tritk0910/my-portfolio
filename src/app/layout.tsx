import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/utils/SmoothScroll";

const inter = Montserrat({ weight: "400", subsets: ["latin"] });

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
        className={`${inter.className} min-h-screen`}
        suppressHydrationWarning={true}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
