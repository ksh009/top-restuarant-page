import './style.css';
import { createNav } from './nav';
import { createHeroSection } from './hero';
import { createMenu } from './menu';
import { createContactForm } from './contact';

// Selectors
const content = document.getElementById('content');
const main = document.createElement('main');

console.log('createNav().returnNavContainer()', createNav().returnNav());

// Add classes
main.classList.add('main-content-container');

// Append
content.appendChild(createNav().returnNavContainer());
// main.appendChild(createHeroSection());
// main.appendChild(createMenu());
// main.appendChild(createContactForm());
content.appendChild(main);

// Event listeners
