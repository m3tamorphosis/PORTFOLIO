import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Certifications,
  Contact,
  Footer,
  StarfieldWrapper,
} from '@/components';

export default function Home() {
  return (
    <>
      <StarfieldWrapper />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
