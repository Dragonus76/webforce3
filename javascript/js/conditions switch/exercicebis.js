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

