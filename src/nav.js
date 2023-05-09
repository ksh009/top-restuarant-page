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
	const middleButtons = document.createElement('div');
	middleButtons.classList.add('middle-buttons');
	const button1 = createButton('Home');
	const button2 = createButton('Menu');
	const button3 = createButton('Contact');
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
