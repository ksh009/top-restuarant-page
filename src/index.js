import './style.css';
import { createNav } from './nav';
import { createHeroSection } from './hero';
import { createMenu } from './menu';
import { createContactForm } from './contact';

// Components
const heroSection = createHeroSection();
const menuSection = createMenu();
const contactSection = createContactForm();
const nav = createNav(heroSection, menuSection, contactSection);

// Selectors
const content = document.getElementById('content');
const main = document.createElement('main');

// Add classes
main.classList.add('main-content-container');

// Append
content.appendChild(nav);
main.appendChild(heroSection);
main.appendChild(menuSection);
main.appendChild(contactSection);
content.appendChild(main);
