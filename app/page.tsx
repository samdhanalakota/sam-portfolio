import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const NAV_ITEMS = ["contact"];

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        {NAV_ITEMS.map((id) => (
          <section
            key={id}
            id={id}
            className="flex h-screen items-center justify-center text-4xl font-bold uppercase text-[var(--text-muted)]"
          >
            {id}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
