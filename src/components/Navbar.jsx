import { useState } from "react";

function Navbar () {
    const [active, setActive] = useState('about');
    const links = [
        { name: 'About', id: 'about'},
        { name: 'Education', id: 'education'},
        { name: 'My Projects', id: 'projects'},
        { name: 'Contact', id: 'contact'}
    ]

    return (
        <nav className="flex gap-5 justify-center text-purple-400 font-medium">
            {links.map(link => (
                <a  href={`#${link.id}`}
                    key={link.id}
                    onClick={() => setActive(link.id)}
                    className={`no-underline hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-purple-300 cursor-pointer transition-all duration-800 ease-in-out
                        ${ active === link.id ? 'underline underline-offset-4 decoration-2 decoration-purple-300' : ''}
                    `}
                >
                    {link.name}
                </a>
            ))}
        
        </nav>
    )
}

export default Navbar;