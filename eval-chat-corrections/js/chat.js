/*
 * GESTION DE LA SOUMISSION DU FORMULAIRE
 * TRAITEMENT DES ERREURS
*/
// On détecte l'evt submit (soumission du form)
$('form').on('submit', function(e) {
	/*
	 * On coupe le comportement par défaut du formumaire
	 * (Voir https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault)
	*/
	e.preventDefault(); 

	// On sélectionne les Elts HTML <select> et <textarea>
	var selectElt = $('select');
	var textareaElt = $('textarea');

	// On récupère la valeur des champs avec .val()
	var catName = selectElt.val(); 
	var reasonToAdopt = textareaElt.val();
	console.log(catName,reasonToAdopt);

	// Traitement de l'erreur 1 : pas de chat sélectionné (value=0 dans le HTML)
	if(catName==0) {
		selectElt.addClass('error');
		// ajouter la class error à l'élément (en css cette class ajouter une propriété border rouge)
	}
	// Traitement de l'erreur 2 : champ textarea < 15 caratères
	if(reasonToAdopt.length<15) {
		textareaElt.addClass('error');
		// ajouter la class error à l'élément (en css cette class ajouter une propriété border rouge)
	}

	// BONUS : Si aucune erreur, alors on cache le form et on montre le message de succès
	if(catName !=0 && reasonToAdopt.length >= 15) {
		$('form').slideUp();
		$('.successMessage').fadeIn();
	}
});


/* --------------------------------------------------------*/

/*
 * GESTION DU RETRAIT DE LA BORDURE ROUGE SUR L'EVT CHANGE
 * QUAND LE USER MODIFIE UN CHAMPS MARQUÉ PAR UNE ERREUR, CELUI-CI REPREND LA COULEUR DE BORDURE ORIGINALE
*/
$('select').on('change', function() {
	$(this).removeClass('error');
});

$('textarea').on('change', function() {
	$(this).removeClass('error');
}) ;


/* --------------------------------------------------------*/