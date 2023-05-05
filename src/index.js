import './style.css';
import { createNav } from './nav';
import { createHomePage } from './home';

const content = document.getElementById('content');
content.appendChild(createNav());

/*
    /project
    ____/dist
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
