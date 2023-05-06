import foodCardImg1 from './img/food-card1.jpg';
import foodCardImg2 from './img/food-card2.jpg';
import foodCardImg3 from './img/food-card3.jpg';

export function createMenu() {
	const section = document.createElement('section');
	section.classList.add('menu-container');
	section.appendChild(
		createMenuItem(
			foodCardImg1,
			'Menu Item 1',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vel neque ac hendrerit.',
			'$10.99'
		)
	);
	section.appendChild(
		createMenuItem(
			foodCardImg2,
			'Menu Item 2',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vel neque ac hendrerit.',
			'$12.99'
		)
	);
	section.appendChild(
		createMenuItem(
			foodCardImg3,
			'Menu Item 3',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vel neque ac hendrerit.',
			'$8.99'
		)
	);

	return section;
}

function createMenuItem(imageSrc, headerText, descriptionText, priceText) {
	const item = document.createElement('div');
	item.classList.add('menu-item');
	item.appendChild(createImage(imageSrc));
	item.appendChild(createHeader(headerText));
	item.appendChild(createDescription(descriptionText));
	item.appendChild(createPrice(priceText));
	item.appendChild(createCTA());

	return item;
}

function createImage(imageSrc) {
	const image = document.createElement('img');
	image.src = imageSrc;
	image.alt = 'Menu Item Image';
	return image;
}

function createHeader(headerText) {
	const header = document.createElement('h3');
	header.classList.add('item-header');
	header.textContent = headerText;
	return header;
}

function createDescription(descriptionText) {
	const description = document.createElement('p');
	description.classList.add('item-description');
	description.textContent = descriptionText;
	return description;
}

function createPrice(priceText) {
	const price = document.createElement('p');
	price.classList.add('item-price');
	price.textContent = priceText;
	return price;
}

function createCTA() {
	const cta = document.createElement('a');
	cta.classList.add('cta-btn');
	cta.href = '#';
	cta.textContent = 'Order Now';
	return cta;
}
