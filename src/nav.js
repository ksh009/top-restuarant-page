export function createNav() {
	const navContainer = createNavContainer();
	const nav = createNavigation();
	const logo = createLogo();
	const auth = createAuthentication();

	nav.appendChild(logo);
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
	logoLink.textContent = 'Restaurant';
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
