import HomePage from "@/components/HomePage";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { contactItems } from "@/data/contactContent";
import { skillContent } from "@/data/skillContent";
import { projectContent } from "@/data/projectContent";

export default function Home() {
  return (
    <>
      <section key={"home"} id={"home"}>
        <HomePage />
      </section>
      <section key={"about"} id={"about"}>
        <Hero />
      </section>
      <section key={"skills"} id={"skills"}>
        <Skills skillContent={skillContent} />
      </section>
      <section key={"projects"} id={"projects"}>
        <Projects projectContent={projectContent} />
      </section>
      <section key={"contact"} id={"contact"}>
        <Contact contactItems={contactItems} />
      </section>
    </>
  );
}
