import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

const NAV_ITEMS = ["about", "projects", "skills", "journey", "contact"];

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
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
