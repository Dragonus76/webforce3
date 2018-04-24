'user strict';

var number =  parseFloat(prompt('saisissez un nombre entier'));



while(isNaN(number)){
	number = prompt('vousn\'avez pas saisit un nombre entier, veuillez saisir un nombre entier : ');
}
document.write('<p> Merci, vous avez saisit <strong>' + number + '</strong></p>');