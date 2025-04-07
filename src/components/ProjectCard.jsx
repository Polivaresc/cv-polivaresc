import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChevronDown, faChevronUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ project }) {
    const [ isExpanded, setIsExpanded ] = useState(false);
    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="card">
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-purple-400"/>
                <h3>{ project.name }</h3>
            </div>
            <div className="flex flex-col gap-3 pt-2">
                <p>{ project.p1 }
                    {!isExpanded &&
                        <button onClick={toggleExpand} className="mx-2 cursor-pointer duration-250 ease-in hover:text-purple-400">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    }
                </p>
                {isExpanded &&
                    <>
                        <p>{ project.p2 }
                            {!project.p3 && isExpanded &&
                                <button onClick={toggleExpand} className="mx-2 cursor-pointer duration-250 ease-in hover:text-purple-400">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            }
                        </p>
                        {project.p3 &&
                            <p>
                            { project.p3 }
                            {isExpanded &&
                                <button onClick={toggleExpand} className="mx-2 cursor-pointer duration-250 ease-in hover:text-purple-400">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            }
                        </p>
                        }
                    </>
                }
                <div>Stack: {project.stack}</div>
                <div>
                    <a href={project.siteLink} className="duration-250 ease-in-out hover:text-purple-400" target="_blank">
                    {project.name} 
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 text-sm"/>
                    </a>
                </div>
                <div>
                    <a href={project.codeLink} className="duration-250 ease-in-out hover:text-purple-400" target="_blank">
                    Code 
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 text-sm"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;