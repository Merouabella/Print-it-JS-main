
// Définir l'indice de la diapositive actuelle
let currentSlideIndex = 0;

// Tableau des diapositives
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
    },
];

// Définir l'indice de la diapositive actuelle
let numero = 0 ;

// Affichage des fléches sur le slider .
 
const flechGauche = document.querySelector(".arrow-left");
flechGauche.addEventListener("click" , function()  {ChangeSlide(-1);
});
console.log(flechGauche);

const flechDroite = document.querySelector(".arrow-right");
flechDroite.addEventListener("click" ,  function()  {ChangeSlide(1);
});
console.log(flechDroite);

// Slides

function ChangeSlide(sens){
	numero = numero + sens;
	if(numero > slides.length - 1)
	numero = 0;
if (numero < 0)
numero =slides.length - 1;



// Recuperation des images et textes

document.querySelector(".banner-img").src ='./assets/images/slideshow/' + slides[numero] ['image'];
document.getElementById("text").innerHTML = slides[numero]['tagLine'];
{console.log(sens)}
}
// Affichage des bullets points.

const 
    