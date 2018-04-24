document.write('<h1>Les saisie Utilisateur</h1>');

var num1 = prompt('saisissez un chiffre : ');
alert('vous avez entré : ' + num1);
console.log(num1);
var num2 = prompt('saisissez un second chiffre : ')
alert('vous avez entré : ' + num2);
console.log(num2);
var result = parseInt(num1) + parseInt(num2);
document.write('le resultat de votre addition est: ' +result);


