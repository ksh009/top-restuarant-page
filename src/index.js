import './style.css';
import { createNav } from './nav';
import { createHeroSection } from './hero';

const content = document.getElementById('content');
content.appendChild(createNav());
content.appendChild(createHeroSection());

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
