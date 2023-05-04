import foodImg from './img/img.jpg';

export function createHomePage() {
	const content = document.getElementById('content');

	const header = createHeader();
	const image = createImage();

	content.appendChild(header);
	content.appendChild(image);
}

function createHeader() {
	const header = document.createElement('header');
	const headline = document.createElement('h1');
	const copy = document.createElement('p');

	headline.textContent = 'Welcome to the Restaurant';
	copy.textContent = 'We serve the best food in town!';

	header.appendChild(headline);
	header.appendChild(copy);

	return header;
}

function createImage() {
	const img = document.createElement('img');
	img.src = foodImg;
	return img;
}
