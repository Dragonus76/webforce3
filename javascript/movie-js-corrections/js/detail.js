/*
 *  Les données : le tableau des films est dans js/data.js 
*/



/* *** Gestion de l'affichge des données du film dans le template HTML ***** */



/* 
 * 1 On récupère l'URL en Javascript avec window.location.href
*/
var url = window.location.href;

/*
 * 2 On utilise ici la fonction utilitaire qui retourne l'id du film d'après l'url
 * (format de notre url déterminée dans index.js : detail.html?id=0)
*/
var movieIndex = getIndexFromUrl(url);

/*
 * On vérifie que l'on récupère bien l'objet du film dans un console.log
*/
console.log(movies[movieIndex]);


/*
 * 3 Comme dispose du film on peut injecter nos valeurs title, resume, image, duration dans notre template HTML
*/
$('head title').text(movies[movieIndex].title + " | Projet MovieJS"); // Insère le titre dans la balise title du <head>
$('h1.details-movie-title span').append(movies[movieIndex].title);
$('img.img-thumbnail').attr('src',movies[movieIndex].image ); // insère le lien de lien de l'image du film en valeur de l'attribut src de l'image
$('.duration span').text(getDurationInHoursAndMinutes(movies[movieIndex].duration)); // Affiche la durée du film dans la balise <span>
$('.date span').text(dateInFrench(new Date(movies[movieIndex].date))); // 
$(".description").prepend(movies[movieIndex].resume); // Affiche le texte du résumé du film dans <p class="description">
$(".director").text(movies[movieIndex].director); // Affiche le nom du réalisateur  du film dans <p class="director">
$(".genre").text(movies[movieIndex].genre); // Affiche le genre du film dans <p class="genre">
$('section.details-movie').addClass(normalizeString(movies[movieIndex].genre)); // Sur la balise section.details-movie - ajoute une class qui a le nom du genre

// Insère la liste des acteurs depuis l'array actors de chaque film
for(var i=0; i<movies[movieIndex].actors.length; i++) {
    $(".actors-list").append(movies[movieIndex].actors[i]);
}



/*
 * 4 On créé l'élément iframe avec createElement
 * On modifie l'atttibut src pour lui donner comme valeur l'url de la video youtube
 * On injecte l'élément créé dans la div.video de notre template HTML (grâce à .appenChild())
*/
var video = document.createElement('iframe');
video.setAttribute('position', 'relative');
video.setAttribute('width', '97%');
video.setAttribute('height', '450');
video.setAttribute('frameborder', '0');
video.setAttribute('allowfullscreen', 'true');
video.setAttribute('src', movies[movieIndex].traileryt + '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1');
document.querySelector('.video').appendChild(video);


/* ********************  Gestion du formulaire ************ */

/*
 * Objectif: gérér la soumission ET les erreurs du formulaire
 * Comment: - Au clic de l'utilisateur sur le bouton submit, nous récupérons les valeurs des champs input et textarea grâce à .val() (en jQuery)
 * 			- Puis on fait les vérifications avec des conditions
 *			- Si l'utilisateur a rentré un prénom avec au moins 2 caractères ET si son commentaire fait maximum 100 caractères,
 			  alors on affiche un message de succès :"Votre commentaire a bien été envoyé"
 			- Sinon on affiche les erreurs sous chacun des champs	
*/

// On détecte l'évènement de soumission du formulaire
$('form').on('submit', function(event) {

	// 1 IMPORTANT : on coupe le comportement par défaut avec e.preventDefault()
	event.preventDefault();

	// 2 On efface tout de suite le contenu texte des paragraphes qui affichent les erreurs
	$('p.error').empty();

	// 3 On définit les variables des champs ET un objet errors (au début il est vide)
	// On chargera les propriétés firstname et comment SI des erreurs surviennent
	var inputElt = $('input[name="firstname"]');
	var textareaElt = $('textarea[name="comment"]');
	var errors = {};

    // 4 On récupère les valeurs de chaque entrée du formulaire avec .val()
    var firstname = inputElt.val();
    var comment = 	textareaElt.val();
    console.log(firstname, comment);

    /*
     * 5 ON VERIFIE LES ERREURS
    */

    // 5.1 On teste le champ prénom fait moins de 2 caractères :
    // - Si oui, on charge la propriété firstname dans l'objet errors
    // - Sinon, on détruit la propriété firstname de l'objet errors
    if(firstname.length<2) {
    	errors.firstname = "Le prénom doit faire au moins 2 caractères";
    }
    else {
    	delete errors.firstname;
    }
    // 5.2 On teste si le champ comment fait moins de 10 car. ou plus de 100 car.
    // - Si oui, on charge la propriété comment dans l'objet errors
    // - Sinon, on détruit la propriété comment dans l'objet errors
    if(comment.length<10 || comment.length>100) {
    	errors.comment = "Votre commentaire doit être compris entre 10 et 100 caractères";
    }
    else {
    	delete errors.comment;
    }
    console.log(errors);


    // 6 Pour finir, si l'objet n'a pas les propriétés firstname ou comment, c'est qu'il n'y a pas d'erreur
    if(errors.hasOwnProperty('firstname') == false && errors.hasOwnProperty('comment') == false){

    	$('h3.message').text('Votre commentaire a bien été envoyé. Cool!');
    	$('h3.message').addClass('success').removeClass('error');
    	window.setTimeout(function() {
    		$('h3.message').fadeOut()
    	}, 2000);
    	// On vide les champs du formulaire avec .reset()
    	document.querySelector('form').reset();
    }
    else {
    	// On affiche un message général "Merci de corriger vos erreur" au dessus du formulaire
    	$('h3.message').text('Merci de corriger vos erreurs');
    	$('h3.message').addClass('error').removeClass('success');

    	if(errors.hasOwnProperty('firstname') == true) {
    		inputElt.next().text(errors.firstname);
    	}

    	if(errors.hasOwnProperty('comment') == true) {
    		textareaElt.next().text(errors.comment);
    	}
    		
    }

}); // FIN FONCTION ON SUBMIT EVENT





// ANIMATIONS
var image = $(".poster");
var data = $(".data");

image.animate({left: '0px', opacity: '1'}, 300);
data.animate({top: '0px', opacity: '1'}, 300);

   