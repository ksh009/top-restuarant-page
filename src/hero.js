import foodHeroImg from './img/food-hero.jpg';

export function createHeroSection(navComp) {
	console.log('navComp', navComp());
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
		'Bite into Happiness at The Snack Shack. Indulge in our delectable treats and savor every moment. From juicy burgers to crispy fries and everything in between, our menu will leave your taste buds begging for more. Come visit us today!';
	return text;
}

function createHeroCTA() {
	const cta = document.createElement('a');
	cta.classList.add('cta-btn');
	cta.href = '#';
	cta.textContent = 'Place an order';
	return cta;
}
