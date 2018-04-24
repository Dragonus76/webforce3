'user strict';
//La boucle for exécute du code un nombre de fois déterminé

var index;

for(index = 0; index < 3; index++){
	document.write('<p>' + index + '</p>');
}

// La boucle while exécute du code tant qu'une expression vaut TRUE

index=0;

while(index<3) {
	document.write('<p>' + index + '</p>');
    index=index+1; // i++
}
//Les boucles do While

document.write('<h1> les boucles "do-while"</h1>');
//La boucle do while execute du code une premiere fois quoi qu'il arrive et ensuite exécute ce même code tant qu'une expression vaut TRUE
var nombre;

do{
	nombre = parseFloat(window.prompt('Saisissez un nombre'));

} while (isNaN(nombre)==true);

document.write('vous avez saisit <strong>' + nombre + '</strong>');