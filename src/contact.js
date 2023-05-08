import foodHeroImg from './img/food-hero.jpg';

export function createContactForm() {
	const section = document.createElement('section');
	section.classList.add('contact-container');
	section.style.backgroundImage = `url(${foodHeroImg})`;
	const form = createForm();
	form.appendChild(createFormGroup('text', 'name', 'Name'));
	form.appendChild(createFormGroup('email', 'email', 'Email'));
	form.appendChild(createFormGroup('tel', 'phone', 'Phone'));
	form.appendChild(createFormGroup('textarea', 'message', 'Message'));
	form.appendChild(createSubmitButton('Submit'));

	section.appendChild(form);
	return section;
}

function createForm() {
	const form = document.createElement('form');
	form.classList.add('contact-form');
	form.setAttribute('action', '#');
	form.setAttribute('method', 'post');
	return form;
}

function createFormGroup(type, name, label) {
	const group = document.createElement('div');
	group.classList.add('form-group');

	const input = document.createElement('input');
	input.setAttribute('type', type);
	input.setAttribute('name', name);
	input.setAttribute('placeholder', label);

	const inputLabel = document.createElement('label');
	inputLabel.setAttribute('for', name);
	inputLabel.textContent = label;

	group.appendChild(inputLabel);
	group.appendChild(input);

	return group;
}

function createSubmitButton(text) {
	const button = document.createElement('button');
	button.classList.add('submit-btn');
	button.setAttribute('type', 'submit');
	button.textContent = text;
	return button;
}
