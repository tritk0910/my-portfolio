import Header from "@/components/layout/Header";
import Theme from "@/components/utils/Theme";

export default function Home() {
  return (
    <main>
      <Theme />
      <div className="flex relative min-h-screen justify-center items-center font-akira text-white text-9xl">
        <Header />
      </div>
    </main>
  );
}
