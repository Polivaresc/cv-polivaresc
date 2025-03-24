import Navbar from "./Navbar";

function Header({ toggleDarkMode, darkMode }) {
    return (
        <header className="p-10 md:px-30 lg:px-70 w-full flex flex-col gap-6 justify-self-center justify-items-start">
            <Navbar />
            <div className="flex justify-center">
            <div id="about">
                <h1>Hi, my name is Paula!</h1>
                <p>I am a detail-oriented and analytical person with a passion for web programming and design.</p>
                <p>I love learning and enjoy solving problems and creating new digital experiences.</p>
            </div>

            </div>  
            <button onClick={toggleDarkMode} className="absolute top-3 right-3 border px-2 text-xs md:text-base cursor-pointer duration-250 ease-in hover:text-purple-400">
                {darkMode ? 'LIGHT' : 'DARK'}
            </button>
        </header>
    )
}

export default Header;