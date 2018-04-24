$('form').on('submit', function(event) {
	event.preventDefault();
  
  // On efface les message d'erreurs si ils étaient présents dans la page
  $('p.error').empty(); // équivalent à $('p.error').text('');

  // 2 On récupère les values
  var category = $('select[name=category]').val();
  var message = $('textarea').val();
  console.log(category, message);

  if( category!=0 && (message.length>10 && message.length<100) ) {
    // On affiche le message de succès et on cache le formulaire
    $('p.success').text('Merci ! Votre message a bien été envoyé.');
    $('form').slideUp();
  }

  // >> ERREUR 2 - Si lutilisateur n'a pas renseigné une catégorie
  if( category==0 ) {
		// On affiche le message d'erreur
		$('select[name=category]').addClass("borderRed");
	}
  
  // >> ERREUR 3 - Si lutilisateur n'a pas au min 10 car. et au max 100 car. pour le message
  if( message.length<10 || message.length>100 ) {
	
    $('textarea').addClass("borderRed");
		$('textarea').next().text('Le message doit contenir au moins 10 caractères');
	}
}) 