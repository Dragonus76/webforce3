// Les données : le tableau des films est dans js/data.js 

/*
	On génère le template HTML de la liste des films
	en utilisant uniquement createElement(), createTextNode() et appenChild()

	On utilise aussi :
	- className pour ajouter des class à un élément créé
	- setAttribute() pour lui ajouter des attributs/valeurs (ici href pour générer le lien)
	- et .src pour modifier créer et modifier l'attribut src de la balise image du film
*/
var numberOfFilms = movies.length;
$('h1 span').text(numberOfFilms);


for(var i=0; i<movies.length; i++) {
	var director = document.createTextNode('De ' + movies[i].director);
	var title = document.createTextNode(movies[i].title);
	var h3 = document.createElement('h3');
	var h2 = document.createElement('h2');
	var img = document.createElement('img');
	var div = document.createElement('div');
	var a = document.createElement('a');
	a.setAttribute('href', 'detail.html?id='+i);

	div.className ='col-md-4 text-center item';
	img.src = movies[i].image;
	img.className = 'img-thumbnail';


	h3.appendChild(director);
	h2.appendChild(title);
	div.appendChild(img);
	div.appendChild(h2);
	div.appendChild(h3);
	
	a.appendChild(div);

    // Pour terminer on cible la balise qui a la class list
    // Pour lui injecter un item de la liste à chaque tour de la boucle for
    // (Ici nous avons 3 objets films dans nos données -> alors 3 template HTML item seront ajoutés dans la div.list)
	document.querySelector(".list").appendChild(a);
}



// ANIMATIONS
var moviesList = $(".list");
moviesList.animate({marginTop: '0px', opacity: '1'}, 'fast', 'swing');
// https://www.journaldev.com/4642/jquery-animate-examples
// http://api.jquery.com/animate/


 
