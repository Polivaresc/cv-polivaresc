import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


function Education() {
    return (
        <section id="education" className="scroll-mt-20">
          <h2 className="underline underline-offset-3 decoration-3 decoration-purple-400">Education</h2>
          <div className="flex flex-wrap self-center py-2">
            <div className="text-wrap w-full md:w-1/2 hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-neutral-700 duration-250 ease-in-out p-3">
                <h3 className="mb-2">Higher Technician in Web Application Development</h3>
                <ul className="list-disc px-4">
                    <li>Relational Databases</li>
                    <li>Object Oriented Programming</li>
                    <li>Web design</li>
                    <li>Computer systems</li>
                </ul>
            </div>
            <div className="text-wrap w-full md:w-1/2 hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-neutral-700 duration-250 ease-in-out p-3">
                <h3 className="mb-2">The Odin Project</h3>
                <ul className="list-disc px-4">
                  <li><a className="duration-250 ease-in-out hover:text-purple-400" href="https://www.theodinproject.com/paths/foundations/courses/foundations" target="_blank">Foundations <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1"/></a></li>
                  <li><a className="duration-250 ease-in-out hover:text-purple-400" href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank">Full Stack JavaScript <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1"/></a></li>
                </ul>
             </div>
          </div>
        </section>
      );
}

export default Education;