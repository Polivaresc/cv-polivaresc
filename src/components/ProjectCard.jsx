import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChevronDown, faChevronUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ project }) {
    const [ isExpanded, setIsExpanded ] = useState(false);
    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
      <div className="card flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCode} className="text-purple-400" />
          <h3>{project.name}</h3>
        </div>

        <div>
          <img src={project.image} alt={project.name} 
          className="w-full min-h-24 object-cover border border-gray-300"/>
        </div>

        <div>
          <button className="cursor-pointer duration-250 ease-in hover:text-purple-400 border-2 border-r-1 rounded-l w-fit px-3 py-1">
            <a
              href={project.siteLink}
              className="duration-250 ease-in-out hover:text-purple-400"
              target="_blank"
            >
              {project.name}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1 text-sm"
              />
            </a>
          </button>
          <button className="cursor-pointer duration-250 ease-in hover:text-purple-400 border-2 border-l-1 rounded-r w-fit px-3 py-1">
            <a
              href={project.codeLink}
              className="duration-250 ease-in-out hover:text-purple-400"
              target="_blank"
            >
              Code
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1 text-sm"
              />
            </a>
          </button>
        </div>

        <div>
            <span className="text-purple-500 dark:text-purple-400">Stack:</span>{" "}
            {project.stack}
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <p>
            {project.p1}
            {!isExpanded && (
              <button
                onClick={toggleExpand}
                className="mx-2 cursor-pointer duration-250 ease-in hover:text-purple-400"
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            )}
          </p>
          {isExpanded && (
            <>
              <p>
                {project.p2}
                {!project.p3 && isExpanded && (
                  <button
                    onClick={toggleExpand}
                    className="mx-2 cursor-pointer duration-250 ease-in hover:text-purple-400"
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </button>
                )}
              </p>
              {project.p3 && (
                <p>
                  {project.p3}
                  {isExpanded && (
                    <button
                      onClick={toggleExpand}
                      className="mx-2 cursor-pointer duration-250 ease-in hover:text-purple-400"
                    >
                      <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                  )}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
}

export default ProjectCard;