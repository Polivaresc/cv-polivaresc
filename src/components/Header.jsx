import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function Header({ toggleDarkMode, darkMode }) {
    return (
        <header className="py-10 w-full flex flex-col gap-6 justify-items-start">
            <Navbar />
            <div>
            <div id="about">
                <h1>Hi, my name is Paula!</h1>
                <p>I am a detail-oriented and analytical person with a passion for web programming and design.</p>
                <p>I love learning and enjoy solving problems and creating new digital experiences.</p>
            </div>

            </div>  
            <button onClick={toggleDarkMode} className="absolute top-5 right-6 text-lg md:text-2xl cursor-pointer duration-250 ease-in hover:text-purple-400">
                {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
        </header>
    )
}

export default Header;