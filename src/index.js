import './style.css';
import { createNav } from './nav';
import { createHeroSection } from './hero';
import { createMenu } from './menu';

// Selectors
const content = document.getElementById('content');
const main = document.createElement('main');

// Add classes
main.classList.add('main-content-container');

// Append
content.appendChild(createNav());
main.appendChild(createHeroSection());
main.appendChild(createMenu());
content.appendChild(main);

/*
    /project
    ____/dist
    ________src
    ____________img
    ____/node_modules
    ____/src
    ________/img
    ____________img.jpg 
    ________nav.js
    ________index.js
    ________style.css
    ____.gitingore
    ____package-lock.json
    ____package.json
    ____README.md
    ____webpack.config.js
*/
