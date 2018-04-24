
/**********Masquer la barre d'outils*************/
var btnElt = document.querySelector('#toolbar-toggle a');
var navElt= document.querySelector('.toolbar');


function hideNav(event){
	event.preventDefault();
	navElt.classList.toggle('hide');

}

btnElt.addEventListener('click', hideNav)

/**********mise en place des boutons avance et retour*************/
var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];
var imageSuivante = document.querySelector('#slider-next');
var imagePrecedente = document.querySelector('#slider-previous');
var imagesElt = document.querySelector('img')
var legendElt = document.querySelector("figcaption");
var index=0;
var idInterval=0;

function next(){
	index ++;
	if (index > 5) {
		index = 0;
	}

	imagesElt.setAttribute('src', slides[index].image);
	legendElt.textContent= slides[index].legend;
}

imageSuivante.addEventListener('click', next);

function preview(){
	index --;
	if (index < 0) {
		index = slides.length-1;
	}

	imagesElt.setAttribute('src', slides[index].image);
	legendElt.textContent= slides[index].legend;
}

imagePrecedente.addEventListener('click', preview);

/***********bouton play**************/
var playElt = document.querySelector('#slider-toggle');

function playFunction(){ 
	if (idInterval == 0){
		idInterval = window.setInterval(next, 1500);
		playElt.classList.add('fa-pause');		
	}else{
		clearInterval(idInterval);
		playElt.classList.remove('fa-pause');
		idInterval = 0;
	}	
}


playElt.addEventListener('click', playFunction);

/**********touche clavier***********/
document.addEventListener("keyup", pressKeyword);

function pressKeyword(event){
	if(event.keyCode == 32 ){
		playFunction();
	} else if(event.keyCode == 37 ){
		preview();
	}else if(event.keyCode == 39 ){
		next();
	}else if(event.keyCode == 82 ){
		randomFunction();
	}else{
		alert('vous avez pressé une autre touche');
	}
}

/***************Bouton Random*********************/
var randomElt= document.querySelector('#slider-random');

function randomFunction(){
	index = getRandomInteger(0, slides.length-1);
	imagesElt.setAttribute('src', slides[index].image);
	legendElt.textContent= slides[index].legend;

}


randomElt.addEventListener('click', randomFunction);

























// La liste des slides du carrousel.
