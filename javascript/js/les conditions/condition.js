'user strict';

var age;
var prenom = "Tom";

age = prompt("entrez votre age : ");
age =parseInt(age);

if(age >= 18){
	document.write("vous etes majeur !");
		if (age < 21){
	document.write(" vous avez moins de 21 ans, vous etes mineur au USA!")	
	}
} else {
	document.write("vous n'avez pas 18 ans !");
}


if (prenom =="Elsa"){
	document.write("Elsa");
} else if (prenom == "Tom"){
	document.write("Tom");
}else{
	document.write("trou d'uc!");
}