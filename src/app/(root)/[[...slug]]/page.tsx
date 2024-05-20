import Contact from "@/components/layout/Contact";
import Description from "@/components/layout/Description";
import Experience from "@/components/layout/Experience";
import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Description />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
