import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
    <div className={`${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-neutral-900 dark:text-purple-100 transition-all duration-500 ease-in-out h-full`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
