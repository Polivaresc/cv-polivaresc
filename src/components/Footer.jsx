import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer id="contact" className="flex items-center justify-center gap-3 bg-gray-200 dark:bg-neutral-800 dark:text-purple-100 w-full mt-10 py-5">
            <div> © 2025 Paula</div>
            <div>•</div>
            <div className="duration-250 ease-in-out hover:text-purple-400">
                <a href="https://github.com/Polivaresc" target="_blank">
                GitHub <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div>•</div>
            <div className="duration-250 ease-in-out hover:text-purple-400">
                <a href="https://www.linkedin.com/in/polivaresc/" target="_blank">
                LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;

