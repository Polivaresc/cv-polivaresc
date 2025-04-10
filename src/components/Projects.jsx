import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
    return (
        <section id="projects">
          <h2 className="underline underline-offset-3 decoration-3 decoration-purple-400">My projects</h2>
          <div className="flex flex-col gap-6 py-2">
            {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  project={project}
                />
            ))}
          </div>
        </section>
      );
}

export default Projects;