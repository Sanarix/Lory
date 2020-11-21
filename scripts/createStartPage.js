function createStartPage(content) {
	const enterButton = document.createElement('button')
	enterButton.textContent = 'Get started';
	enterButton.classList.add('enter-button');
	content.appendChild(enterButton);
}

export default createStartPage;