import Technologies from "./Technologies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


function Education() {
    return (
        <section id="education" className="p-3 w-full flex flex-col items-center">
          <h2 className="underline underline-offset-3 decoration-3 decoration-purple-400">Education</h2>
          <div className="flex flex-wrap justify-center py-2">
            <div className="text-wrap w-full md:w-1/2 hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-neutral-700 duration-250 ease-in-out p-4">
                <h3 className="mb-2">Higher Technician in Web Application Development</h3>
                <ul>
                    <li>Relational Databases</li>
                    <li>Object Oriented Programming</li>
                    <li>Web design</li>
                    <li>Computer systems</li>
                </ul>
            </div>
            <div className="text-wrap w-full md:w-1/2 hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-neutral-700 duration-250 ease-in-out p-4">
                <h3 className="mb-2">The Odin Project</h3>
                <p><a className="duration-250 ease-in hover:text-purple-400" href="https://www.theodinproject.com/paths/foundations/courses/foundations" target="_blank">Foundations <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></p>
                <p><a className="duration-250 ease-in hover:text-purple-400" href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank">Full Stack JavaScript <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></p>
            </div>
          </div>
          <h3>Technologies learned</h3>
          <Technologies/>
        </section>
      );
}

export default Education;