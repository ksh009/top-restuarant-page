import foodHeroImg from './img/food-hero.jpg';

export function createHeroSection() {
	const section = document.createElement('section');
	section.classList.add('hero');
	section.style.backgroundImage = `url(${foodHeroImg})`;
	section.appendChild(createHeroContent());

	return section;
}

function createHeroContent() {
	const content = document.createElement('div');
	content.classList.add('hero-content');
	content.appendChild(createHeroTitle());
	content.appendChild(createHeroText());
	content.appendChild(createHeroCTA());

	return content;
}

function createHeroTitle() {
	const title = document.createElement('h1');
	title.textContent = 'Welcome to the Snack Shack';
	return title;
}

function createHeroText() {
	const text = document.createElement('p');
	text.textContent =
		'Some descriptive text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
	return text;
}

function createHeroCTA() {
	const cta = document.createElement('a');
	cta.classList.add('cta-btn');
	cta.href = '#';
	cta.textContent = 'Sign Up Now';
	return cta;
}
