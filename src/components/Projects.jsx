import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
      { name: 'Project 1', id: '1', description: ''},
      { name: 'Project 2', id: '2', description: ''},
      { name: 'Project 3', id: '3', description: ''},
      { name: 'Project 4', id: '4', description: ''}
    ]
    return (
        <section id="projects" className="p-6 md:px-30 lg:px-70 w-full">
          <h2 className="underline underline-offset-3 decoration-3 decoration-purple-400">My projects</h2>
          <div className="flex flex-wrap gap-6 p-3">
            {projects.map(project => (
                <ProjectCard 
                  key={project.id}
                  projectName={project.name}
                  projectDescription={project.description}
                />
            ))}
          </div>
        </section>
      );
}

export default Projects;