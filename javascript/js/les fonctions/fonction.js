'user strict';
var prenom = prompt('Indiquez votre prenom : ');
function direBonjour(){

	document.write('Bonjour ' + prenom);
}

function direAurevoir(name){
	document.write('Au revoir ' + name);
}

direBonjour();
document.write('<br>')

direAurevoir(prenom);

function sendEmail(email, prenom, objet){
	document.write('Email envoyé à : ' + prenom + '/' + email);
	document.write('Objet :' + objet);
}


document.write('<br>')
sendEmail("steeve@apple.com", "steeve", "Tu cherche un dev ?");
document.write('<br>')
document.write('<br>')

function addition( num1, num2){
var resultat = num1 + num2
return resultat;
}
document.write('L\'addition de vos 2 nombre est : ' + addition(15,17));
