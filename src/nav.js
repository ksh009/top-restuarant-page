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
	const signUpButton = createSignUpButton();
	const signInButton = createSignInButton();
	auth.appendChild(signUpButton);
	auth.appendChild(signInButton);
	return auth;
}

function createSignUpButton() {
	const signUpButton = document.createElement('button');
	signUpButton.textContent = 'Sign up';
	return signUpButton;
}

function createSignInButton() {
	const signInButton = document.createElement('button');
	signInButton.textContent = 'Sign in';
	return signInButton;
}

function createMiddleButtons() {
	const middleButtons = document.createElement('div');
	middleButtons.classList.add('middle-buttons');
	const button1 = createButton('Button 1');
	const button2 = createButton('Button 2');
	const button3 = createButton('Button 3');
	button1.textContent = 'Home';
	button2.textContent = 'Menu';
	button3.textContent = 'Contact';
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

// _________________________-
// export function createNav() {
// 	const navContainer = createNavContainer();
// 	const nav = createNavigation();
// 	const logo = createLogo();
// 	const auth = createAuthentication();
// 	const middleButtons = createMiddleButtons();

// 	nav.appendChild(logo);
// 	nav.appendChild(middleButtons);
// 	nav.appendChild(auth);
// 	navContainer.appendChild(nav);

// 	return navContainer;
// }

// function createMiddleButtons() {
// 	const middleButtons = document.createElement('div');
// 	middleButtons.classList.add('middle-buttons');
// 	const button1 = createButton('Button 1');
// 	const button2 = createButton('Button 2');
// 	const button3 = createButton('Button 3');
// 	button1.textContent = 'Home';
// 	button2.textContent = 'Menu';
// 	button3.textContent = 'Contact';
// 	middleButtons.appendChild(button1);
// 	middleButtons.appendChild(button2);
// 	middleButtons.appendChild(button3);
// 	return middleButtons;
// }

// function createButton(text) {
// 	const button = document.createElement('button');
// 	button.textContent = text;
// 	return button;
// }

// rest of the functions stay the same
