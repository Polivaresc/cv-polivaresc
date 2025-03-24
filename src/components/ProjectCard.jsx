function ProjectCard({ projectName, projectDescription }) {
    return (
        <div className="card">
            <h3>{ projectName }</h3>
            <p>{ projectDescription }</p>
        </div>
    )
}

export default ProjectCard;