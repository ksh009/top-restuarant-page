import './style.css';

function createHomePage() {
	const content = document.getElementById('content');

	const header = document.createElement('header');
	const headline = document.createElement('h1');
	const copy = document.createElement('p');
	const img = document.createElement('img');

	headline.textContent = 'Welcome to the Restaurant';
	copy.textContent = 'We serve the best food in town!';
	img.src = 'path-to-image.jpg';

	header.appendChild(headline);
	header.appendChild(copy);
	content.appendChild(header);
	content.appendChild(img);
}

createHomePage();
