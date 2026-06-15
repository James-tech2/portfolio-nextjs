"use client";
import { projectContent } from "@/data/projectContent";
import Image from "next/image";

interface ProjectProps {
  projectContent: typeof projectContent;
}

const Projects = ({ projectContent }: ProjectProps) => {
  return (
    <section
      id="projects"
      className="py-16 bg-slate-900 text-white"
      aria-label="Projects Section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Examples of full-stack work showcasing front-end UX, backend APIs,
            real-time features, and cloud deployments.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {projectContent.map((project) => (
            <article
              key={project.title}
              className="p-6 bg-white/5 border border-white/6 rounded-lg hover:shadow-lg transition"
            >
              <div className="mb-4 rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover object-center"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <div className="flex flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/6 text-gray-100 mr-2 mb-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
