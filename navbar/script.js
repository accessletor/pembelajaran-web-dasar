const menuTo = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuTo.addEventListener('click', function () {
	nav.classList.toggle('slide');
});
