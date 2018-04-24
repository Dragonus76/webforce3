/*
 * @Param : chaine de caractère url de type detail.html?id=1
 * @return : la valeur du paramètre id dans l'url (exemple : 1)
*/
function getIndexFromUrl(url){
	var tab = url.split('?');
	var index = tab[1].slice(3);
	return index;
}

/*
 * A partir d'une durée en minutes, formate une durée en heures-minutes et retourne la chaîne de caractère
 * @Param : durée en minute
 * @Return : chaine de caractère de la durée en heure-minute
*/
function getDurationInHoursAndMinutes(time) {
	var timetoprint;// Durée à afficher
	var hours; 		// la durée en heures
	var minutes; 	// la durée en minute

	if (time<60) {
		timetoprint =  time + "m";
	}
	else {
		var hours = Math.floor(time/60);
		var minutes = time%60;
		if(minutes==0) {
			timetoprint = hours +'h00m';
		}
		else if(minutes<10){
				timetoprint = hours +'h0' + minutes +' m';
		}
		else {
				timetoprint = hours + 'h'+ minutes + 'm';
			
		}
	}
	return timetoprint; // retourne la durée à affiche en heures-minutes	
}


/*
 * @Param : Cette fonction prend en paramètre une chaîne de caractère
 * @Return : retourne une chaîne de caractère formatée en minuscules
 * sans accent, ni caractère spécial, remplaces les espaces par des -
*/
function normalizeString(str) {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-').toLowerCase();
}





var daysInFrench = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var monthsInFrench = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
/*
 * @Param : Cette fonction prend en paramètre la date au format anglais yyyy-mm-dd
 * @Return : retourne une chaîne de caractère - la date formatée en Français
*/
function dateInFrench(dateObject) {
	return daysInFrench[dateObject.getDay()] + " " + dateObject.getDate() +  " " + monthsInFrench[dateObject.getMonth()] + " " + dateObject.getFullYear();
}