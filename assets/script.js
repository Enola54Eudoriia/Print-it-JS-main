const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

function slider(id) {
	'use strict';

	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');
	const dotsContainer = document.querySelector('.dots');
	let currentIndex = 0;

	function createElements() {
		const banner = document.getElementById(id);
		banner.insertAdjacentHTML("afterbegin", `
			<img class="banner-img" src="./assets/images/slideshow/${slides[0].image}" alt="Banner Print-it">
			<p>${slides[0].tagLine}</p>
		`);
		for (let index = 0; index < slides.length; index++) {
			const dot = document.createElement('div');
			dot.classList.add('dot');
			const a = document.createAttribute("data-id");
			a.value = index;
			dot.setAttributeNode(a);
			dotsContainer.appendChild(dot);
		}
	}
	createElements();

	const updateSlider = (index) => {
		const slide = slides[index];
		const banner = document.getElementById(id);
		const img = banner.querySelector('.banner-img');
		const text = banner.querySelector('p');
		img.src = `./assets/images/slideshow/${slide.image}`;
		text.innerHTML = slide.tagLine;
		dots.forEach((dot, i) => {
			dot.classList.toggle('dot_selected', i === index);
		});
	};

	const dots = document.querySelectorAll('.dot');

	for (let dot of dots) {
		dot.addEventListener('click', (e) => {
			console.log(e.target.dataset.id);
			currentIndex = e.target.dataset.id;
			updateSlider(currentIndex);
		});
	}

	arrowRight.addEventListener('click', () => {
		console.log('Flèche droite cliquée');
		currentIndex = (currentIndex + 1) % slides.length;
		updateSlider(currentIndex);
	});

	arrowLeft.addEventListener('click', () => {
		console.log('Flèche gauche cliquée');
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		updateSlider(currentIndex);
	});
}

slider("banner", slides.length);
