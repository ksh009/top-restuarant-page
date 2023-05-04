export function createNav() {
	// create header container
	const navContainer = document.createElement('header');
	navContainer.classList.add('nav-container');

	// create navigation bar
	const nav = document.createElement('nav');
	nav.classList.add('nav');

	// create logo
	const logo = document.createElement('div');
	logo.classList.add('logo');
	const logoLink = document.createElement('a');
	logoLink.href = '#';
	logoLink.textContent = 'Restaurant';
	logo.appendChild(logoLink);

	// create authentication buttons
	const auth = document.createElement('div');
	auth.classList.add('auth');
	const signUpButton = document.createElement('button');
	signUpButton.textContent = 'Sign up';
	const signInButton = document.createElement('button');
	signInButton.textContent = 'Sign in';
	auth.appendChild(signUpButton);
	auth.appendChild(signInButton);

	// append elements to nav and navContainer
	nav.appendChild(logo);
	nav.appendChild(auth);
	navContainer.appendChild(nav);

	// return header container
	return navContainer;
}
