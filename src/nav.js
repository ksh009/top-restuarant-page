export function createNav() {
	const navContainer = createNavContainer();
	const nav = createNavigation();
	const logo = createLogo();
	const auth = createAuthentication();
	const middleButtons = createMiddleButtons();

	nav.appendChild(logo);
	nav.appendChild(middleButtons);
	nav.appendChild(auth);
	navContainer.appendChild(nav);

	return navContainer;
}

function createNavContainer() {
	const navContainer = document.createElement('header');
	navContainer.classList.add('nav-container');
	return navContainer;
}

function createNavigation() {
	const nav = document.createElement('nav');
	nav.classList.add('nav');
	return nav;
}

function createLogo() {
	const logo = document.createElement('div');
	logo.classList.add('logo');
	const logoLink = createLogoLink();
	logo.appendChild(logoLink);
	return logo;
}

function createLogoLink() {
	const logoLink = document.createElement('a');
	logoLink.href = '#';
	logoLink.textContent = 'Snack Shack';
	return logoLink;
}

function createAuthentication() {
	const auth = document.createElement('div');
	auth.classList.add('auth');
	const signUpButton = createButton('SIGN UP');
	const signInButton = createButton('SIGN IN');
	auth.appendChild(signUpButton);
	auth.appendChild(signInButton);
	return auth;
}

function createMiddleButtons() {
	const heroSection = document.querySelector('.hero');
	const menuSection = document.querySelector('.menu-container');
	const contactSection = document.querySelector('.contact-container');
	const middleButtons = document.createElement('div');
	middleButtons.classList.add('middle-buttons');
	const button1 = createButton('Home');
	const button2 = createButton('Menu');
	const button3 = createButton('Contact');
	button1.classList.add('active');
	button1.addEventListener('click', () => {
		// heroSection.style.display = 'flex';
		// menuSection.style.display = 'none';
		// contactSection.style.display = 'none';
		button1.classList.add('active');
		button2.classList.remove('active');
		button3.classList.remove('active');
	});

	button2.addEventListener('click', () => {
		// heroSection.style.display = 'none';
		// menuSection.style.display = 'grid';
		// contactSection.style.display = 'none';
		button2.classList.add('active');
		button1.classList.remove('active');
		button3.classList.remove('active');
	});

	button3.addEventListener('click', () => {
		// heroSection.style.display = 'none';
		// menuSection.style.display = 'none';
		// contactSection.style.display = 'grid';
		button3.classList.add('active');
		button1.classList.remove('active');
		button2.classList.remove('active');
	});
	middleButtons.appendChild(button1);
	middleButtons.appendChild(button2);
	middleButtons.appendChild(button3);
	return middleButtons;
}

function createButton(text) {
	const button = document.createElement('button');
	button.textContent = text;
	return button;
}
