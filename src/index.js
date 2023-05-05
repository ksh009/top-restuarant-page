import './style.css';
import { createNav } from './nav';
import { createHomePage } from './home';

const content = document.getElementById('content');
content.style.backgroundImage = "url('./img/davide-cantelli.jpg')";
content.style.backgroundSize = 'cover';
content.style.backgroundPosition = 'center center';
content.appendChild(createNav());

/*
    /project
    ____/dist
    ________src
    ____________img
    ____/node_modules
    ____/src
    ________/img
    ____________img.jpg 
    ________index.js
    ________style.css
    ____.gitingore
    ____package-lock.json
    ____package.json
    ____README.md
    ____webpack.config.js



*/
