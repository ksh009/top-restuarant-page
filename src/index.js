import './style.css';
import foodImg from './img/img.jpg';

function createHomePage() {
	const content = document.getElementById('content');

	const header = document.createElement('header');
	const headline = document.createElement('h1');
	const copy = document.createElement('p');
	const img = document.createElement('img');

	headline.textContent = 'Welcome to the Restaurant';
	copy.textContent = 'We serve the best food in town!';
	img.src = foodImg;

	header.appendChild(headline);
	header.appendChild(copy);
	content.appendChild(header);
	content.appendChild(img);
}

createHomePage();

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
