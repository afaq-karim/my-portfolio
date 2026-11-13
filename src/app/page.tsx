import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Experience />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
