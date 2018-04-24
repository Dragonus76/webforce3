'user strict';

//la boucle for
//1 Initialisation
//2 Condition (Tant que cette expression vaut 'true' la boucle continue)
//3 pas d'incrémentation

for(var i=2; i>=1; i--){
	document.write('<p>' + i + ' J\'aime le JS!</p>');
}

for(var j=1; j<=5; j++){
	document.write('<p>' + j + ' J\'aime pas le JS!</p>');
}

for(var k=1; k<=3; k++){
	document.write('<p>' + k + ' Je m\'en fou du JS!</p>');
}

for(var l=3; l>=1; l--){
	document.write('<p>' + l + ' Js c\'est de la merde');
}


var eleves = ['Stephane', 'Kamel', 'Thomas', 'JM', 'Audrey', 'Julie', 'Jeremy', 'Franz', 'Alexska', 'Guillaume'];

console.log(eleves.length);

document.write('<br>');
for(var index=0; index<=9; index++ ){
	document.write('<p>' + eleves[index] + '</p>');
};

var fruits = ['Banane', 'Pomme', 'Fraise', 'Orange'];
console.log(fruits.length);
for(var iteration = 0; iteration<fruits.length; iteration++){
	document.write('<p>' + fruits[iteration] + '</p>');
}