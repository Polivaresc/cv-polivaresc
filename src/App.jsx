import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      // document.documentElement.classList.add('dark');
    } else {
      // setDarkMode(false);
      // document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-neutral-900 dark:text-purple-100 transition-all duration-500 ease-in-out flex flex-col items-center min-h-screen`}>
      <div className='lg:max-w-4xl max-w-lg px-10 w-full xl:max-w-5xl flex flex-col gap-5'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <About />
        <Education />
        <Technologies />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App;
