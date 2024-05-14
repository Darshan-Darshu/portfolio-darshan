import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className='snap-y snap-mandatory z-0'>
      <section
        id='hero'
        className='snap-center'
      >
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center'
      >
        <About />
      </section>

      <section
        id='experience'
        className='snap-center'
      >
        <Experience />
      </section>

      <section
        id='skills'
        className='snap-start'
      >
        <Skills />
      </section>

      <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section>
    </main>
  );
}
