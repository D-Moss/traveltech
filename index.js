// Fade in navbar after hero on desktop
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
	if (window.scrollY > hero.offsetHeight - 50) {
		navbar.classList.add('visible');
	} else {
		navbar.classList.remove('visible');
	}
});

// Mobile hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Close menu when clicking the close button
closeBtn.addEventListener('click', () => {
	navLinks.classList.remove('active');
});