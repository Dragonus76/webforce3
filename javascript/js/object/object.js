var maison = {};
maison.nbPieces = 3;
maison.surface = 65;
maison.couleur = "bleu";

document.write(maison.surface);

document.write("<br />");
document.write("<br />");

document.write("couleur: " + maison.couleur);

var maison2 = {
	nbPieces2: 4,
	surface2: 75,
	couleur2: "verte"
};
console.log(maison2);
document.write("<br />");
document.write(maison2.surface2);
document.write("<br />");document.write("<br />");document.write("<br />");


var date = new Date('1955-11-05');


var voiture = {
	marque: "DeLorean",
	annee: 2015,
	dateAchat: date.toDateString(),
	passager: ['Marty', 'Emett Brown', 'Einstein']
};

console.log(voiture);

document.write("<h1>Un Objet Voiture</h1>");
document.write("<h2>Information sur la voiture</h2>");
document.write("<br />");
document.write("<ul>"); 
document.write("<li>Marque : " + " " + voiture.marque + "</li>"); 
document.write("<li>Année : " + " " + voiture.annee + "</li>");
document.write("<li>Date de l'achat : " + " " + voiture.dateAchat + "</li>"); 
document.write("<li> Passager 1 : " + " " + voiture.passager[0] + "</li>"); 
document.write("<li> Passager 2 : " + " " + voiture.passager[1] + "</li>"); 
document.write("<li> Passager 3 : " + " " + voiture.passager[2] + "</li>"); 


document.write("</ul>");