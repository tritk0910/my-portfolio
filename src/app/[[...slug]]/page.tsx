import Contact from "@/components/layout/Contact";
import Description from "@/components/layout/Description";
import Experience from "@/components/layout/Experience";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";
import Logo from "@/components/utils/Logo";
import Theme from "@/components/utils/Theme";

type Props = {
  params: { slug: string[] };
};

export default function Home({ params }: Props) {
  if (
    params.slug?.length >= 1 &&
    (params.slug[0] === "helloworld" || params.slug[0] === "hello-world")
  ) {
    return (
      <main>
        <h1>Hello World</h1>
      </main>
    );
  }
  return (
    <main>
      <Logo />
      <Theme />
      <Header />
      <Description />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
