import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {["intro", "about", "projects", "skills", "journey", "contact"].map((id) => (
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
