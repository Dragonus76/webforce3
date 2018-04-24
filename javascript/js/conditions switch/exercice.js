'user strict';

var choixUser= prompt('Choisissez pierre, feuille ou ciseau').toLowerCase();
var random = Math.random();
var choixComputer;

if (random < .33){
	choixComputer = 'pierre';
} else if (random < .66){
	choixComputer = 'feuille';
}else {
	choixComputer = 'ciseau'
}
document.write("Vous avez choisit : <strong>" + choixUser + "</strong>")
document.write('<br>');
document.write("l'ordinateur à choisit : <strong>" + choixComputer + "</strong>")
document.write('<br>');


if(choixUser == 'pierre' && choixComputer == 'feuille'){
	document.write('La feuille envellope la pierre, vous avez perdu !'+ "<br>"  + "<img src='perdu.jpg' />");
} else if (choixUser == 'pierre' && choixComputer == 'ciseau') {
	document.write('La pierre casse les ciseau, vous avez gagné !'+ "<br>" + "<img src='victoire.jpg' />");
} else if (choixUser == 'feuille' && choixComputer == 'ciseau') {
	document.write('La feuille est coupé par le ciseau, vous avez perdu !'+ "<br>" + "<img src='perdu.jpg' />");
} else if (choixUser == 'feuille' && choixComputer == 'pierre'){
	document.write('La feuille envellope la pierre, vous avez gagné !'+ "<br>" + "<img src='victoire.jpg' />");
} else if (choixUser == 'ciseau' && choixComputer == 'pierre'){
	document.write('La pierre casse les ciseau, vous avez perdu !'+ "<br>" + "<img src='perdu.jpg' />");
} else if (choixUser == choixComputer){
	document.write('<strong>Egalité ! </strong>'+ "<br>" + '<img src="egalite.png" />');
}else{
	document.write('Vous jouez à "pierre" "feuille" "ciseau", le "puit" n\'éxiste pas ou d\'autres signes non plus !');
}



