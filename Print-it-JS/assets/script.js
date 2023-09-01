'use strict';

/* Slides */
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Variables */
let actualSlide = 0;
let maxSlides = 0;
slides.forEach(image => {maxSlides += 1;});

/* Ajouts des slides dans le carrousel */
const imageElement = document.createElement("img");
const tagLineElement = document.createElement("p");
const divBanner = document.querySelector("#banner");
imageElement.alt = 'Banner Print-it';
imageElement.className = 'banner-img';
function generateSlider () {
	imageElement.src = './assets/images/slideshow/' + slides[actualSlide].image;
	tagLineElement.innerHTML = slides[actualSlide].tagLine;
	divBanner.appendChild(imageElement);
	divBanner.appendChild(tagLineElement);
};

/* Ajouts des bullet points dans le carrousel */
const divDots = document.querySelector(".dots");
function generateDots (mSlides, aSlides) {
	slides.forEach(image => {
		const dotElement = document.createElement("p");
		dotElement.className = 'dot';
		if (aSlides+mSlides == maxSlides) {
			dotElement.className = 'dot dot_selected';
		}
		divDots.appendChild(dotElement);
		mSlides -= 1;
	})
};

/* Ajouts des flèches de navigation dans le carrousel */
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.onclick = function () {
	if (actualSlide > 0) {
		actualSlide -= 1;
	} else {
		actualSlide = maxSlides-1;
	}
	divDots.innerHTML = '';
	generateSlider();
	generateDots(maxSlides, actualSlide);
	console.log('La slide se déplace vers la gauche, slide n°' + (actualSlide+1) + ' affiché actuellement.');
};
const arrowRight = document.querySelector(".arrow_right");
arrowRight.onclick = function () {
	if (actualSlide < maxSlides-1) {
		actualSlide += 1;
	} else {
		actualSlide = 0;
	}
	divDots.innerHTML = '';
	generateSlider();
	generateDots(maxSlides, actualSlide);
	console.log('La slide se déplace vers la droite, slide n°' + (actualSlide+1) + ' affiché actuellement.');
};

/* Ajout d'un retour sur la console */
console.log('Il y a ' + maxSlides + ' slides dans le carrousel.')
console.log('la slide actuelle est la n° ' + (actualSlide+1) + '.')

/* Génération du carrousel initial */
generateSlider();
generateDots(maxSlides, actualSlide);