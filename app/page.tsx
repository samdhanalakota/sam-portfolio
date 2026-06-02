import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

const NAV_ITEMS = ["skills", "journey", "contact"];

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
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
