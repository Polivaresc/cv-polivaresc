import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';

function Technologies() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesPerPage, setImagesPerPage] = useState(3);

    const images = [
        { name: 'Java', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
        { name: 'JavaScript', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
        { name: 'Spring', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"},
        { name: 'Angular', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"},
        { name: 'React', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { name: 'PostgreSQL', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
        { name: 'HTML', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
        { name: 'CSS', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
        { name: 'Tailwindcss', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
        { name: 'Bootstrap', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"},
        { name: 'XML', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"},
        { name: 'Linux', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},
        { name: 'Apache', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg"},
        { name: 'Git', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},

    ];

    const getImagesPerPage = () => {
        if (window.innerWidth >= 1024) {
          return 8; 
        } else if (window.innerWidth >= 768) {
          return 4; 
        } else {
          return 3; 
        }
      };

    const nextSlide = () => {
        if (currentIndex + imagesPerPage < images.length) {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
        }
    };

    useEffect(() => {
        const handleResize = () => setImagesPerPage(getImagesPerPage());
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <section id="technologies">
            <h2 className="underline underline-offset-3 decoration-3 decoration-purple-400">Technologies learned</h2>
            <div className="flex items-center py-2">
                <button onClick={prevSlide} className="cursor-pointer text-2xl md:text-4xl duration-250 ease-in hover:text-purple-400">
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
                <div className="relative w-full mx-auto max-w-3xl overflow-hidden px-6 flex justify-center items-end">
                <div className="flex overflow-x-auto space-x-6 py-4 animate-fade-in">
                    {images.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
                    <div key={index}>
                        <img className={`h-20`}
                        src={image.src} alt={image.name}/>
                
                        <div className="opacity-0 hover:opacity-100 duration-300 ease-in py-2 text-center text-sm cursor-default">
                        {image.name}
                        </div>
                    </div>
                    ))}
                </div>      
                </div>
                <button onClick={nextSlide} className="cursor-pointer text-2xl md:text-4xl duration-250 ease-in hover:text-purple-400">
                    <FontAwesomeIcon icon={faCircleRight} />
                </button>
            </div> 
        </section>
    )
}

export default Technologies;