import img1 from '../assets/task_manager.png';
import img2 from '../assets/book_manager.png';
import img3 from '../assets//battleship.png';
import img4 from '../assets/library.png';
import img5 from '../assets/memory_card.png';
import img6 from '../assets/tic_tac_toe.png';
import img7 from '../assets/portfolio.png';


export const projects = [
    {
        name: 'Task Manager',
        codeLink: 'https://github.com/Polivaresc/task-manager',
        siteLink: 'https://polivaresc.github.io/task-manager/',
        image: img1,
        p1: 'Username: admin, Password: 1234',
        p2: 'This is a simple Task Manager application built with Angular. The main goal was to practice Angular concepts such as services, routing, and component-based architecture, while also exploring integration with third-party libraries like Chart.js for data visualization and Tailwind CSS for styling.',
        p3: 'The app includes a basic login system—users must authenticate with a username and password to access task management features and charts. Authentication is handled via Angular services, and protected routes ensure that only logged-in users can interact with the core functionality.',
        stack: 'Angular, Tailwindcss'
    },
    {
        name: 'Book Manager',
        codeLink: 'https://github.com/Polivaresc/angular-book-manager',
        siteLink: 'https://polivaresc.github.io/angular-book-manager/books',
        image: img2,
        p1: 'This is a Book Manager application built with Angular. The main objective of this project was to deepen understanding of Angular fundamentals by creating a CRUD interface to manage a list of books.',
        p2: 'The app allows users to add, edit, and delete books with built-in validation to prevent duplicate entries. Angular services are used for data handling and reactive forms ensure a dynamic user experience.',
        p3: 'For styling, Bootstrap was used to create a clean and responsive layout. Angular Material was also integrated for toast-style notifications, enhancing the user feedback and interface interactivity.',
        stack: 'Angular, Bootstrap, Material'
    },
    { 
        name: 'Battleship', 
        codeLink: 'https://github.com/Polivaresc/battleship', 
        siteLink: 'https://polivaresc.github.io/battleship/',
        image: img3,
        p1: 'This is an implementation of the classic Battleship game. The main goal was to practice Test-Driven Development (TDD) principles by writing unit tests before implementing the game logic.', 
        p2: 'The codebase is structured into modular components for handling the game board, ships, and player interactions, ensuring clear separation of concerns and testability.',
        stack: 'JavaScript, HTML, CSS', 
    },
    { 
        name: 'Library', 
        codeLink: 'https://github.com/Polivaresc/library',
        siteLink: 'https://polivaresc.github.io/library/',
        image: img4,
        p1: 'This project is a simple Library app. Users can add books with a title, author, number of pages, and read status.', 
        p2: 'Each book is represented as an object and displayed dynamically in the browser. The interface allows users to toggle the read status or remove books.',
        p3: 'The goal of this project was to reinforce key front-end development concepts such as working with the DOM, updating the UI dynamically, and managing data locally without any frameworks.',
        stack: 'JavaScript, HTML, CSS'
    },
    { 
        name: 'Memory Card', 
        codeLink: 'https://github.com/Polivaresc/react-memory-card',
        siteLink: 'https://polivaresc.github.io/react-memory-card/',
        image: img5,
        p1: 'This is a Memory Card Game built with React. It was created to practice core React concepts such as component-based architecture, state management with hooks, and event handling.', 
        p2: 'The player is challenged to click on unique cards without repeating. The score increases with each correct guess and resets when a card is clicked twice. The card data is stored locally for simplicity and speed.',
        p3: 'This project is for educational purposes only. All names and images used in this project are the property of Daniel Mullins Games from the game Inscryption. I do not own any of the rights, nor do I intend to use them for commercial purposes.',
        stack: 'React'
    },
    { 
        name: 'Tic-Tac-Toe', 
        codeLink: 'https://github.com/Polivaresc/tic-tac-toe',
        siteLink: 'https://polivaresc.github.io/tic-tac-toe/',
        image: img6,
        p1: 'This is a Tic Tac Toe game. The goal was to practice DOM manipulation, game logic, and clean code structuring without using any external libraries or frameworks.',
        p2: 'The game supports two-player turns, checks for win and draw conditions, and includes a reset button to start a new game. It demonstrates basic interactive UI handling and separation of logic from presentation.',
        stack: 'JavaScript, HTML, CSS'
    },
    { 
        name: 'This Portfolio', 
        codeLink: 'https://github.com/Polivaresc/cv-polivaresc', 
        siteLink: '',
        image: img7,
        p1: 'This is a personal CV website built with React, designed to showcase my background, skills, and projects in a clean and responsive layout.', 
        p2: 'The project focuses on practicing React component structure, reusable UI blocks and responsive design. It includes sections like About Me, Educational Background, Projects, and Contact, and was developed as part of my learning journey.',
        stack: 'React, Tailwindcss'
    }
  ]