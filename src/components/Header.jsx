import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function Header({ toggleDarkMode, darkMode }) {
    return (
        <header className="fixed top-0 right-0 left-0 py-8 z-1 bg-gray-100 dark:bg-neutral-900 min-h-16 w-full">
            <Navbar />

            <button onClick={toggleDarkMode} className="absolute top-5 right-6 text-lg md:text-2xl cursor-pointer duration-250 ease-in hover:text-purple-400">
                {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
        </header>
    )
}

export default Header;