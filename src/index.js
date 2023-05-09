import './style.css';
import { createNav } from './nav';
import { createHeroSection } from './hero';
import { createMenu } from './menu';
import { createContactForm } from './contact';

// Selectors
const content = document.getElementById('content');
const main = document.createElement('main');

// console.log('createNav().returnNavContainer()', createNav().returnNav());
const { returnNavContainer, returnNav } = createNav();

// Add classes
main.classList.add('main-content-container');

// Append
content.appendChild(returnNavContainer());
main.appendChild(createHeroSection(returnNav));
// main.appendChild(createMenu());
// main.appendChild(createContactForm());
content.appendChild(main);

// Event listeners
