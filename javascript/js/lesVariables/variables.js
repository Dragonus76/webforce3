'usestrict';
// variable sert à stocker des valeurs
document.write('<h3>Hello WF3</h3>');

//window.alert("j'ai envie de pisser !");

//Déclarer la variable, toujours etre précis dans le nom et préférable en anglais 

var unNomPourMaVariable;

//Affecter un valeur pour une variable
unNomPourMaVariable = "Bonjour WF3 !";

//Je peux utiliser la variable partout dans  mon code
document.write(unNomPourMaVariable);

//Déclarer une constante

const UNE_CONSTANTE = "ceci est ma constante";
//window.alert(UNE_CONSTANTE);

//exemple

//Montant hors taxe
//taux de tva
//calcul du montant ttc

var prixProduit = prompt('indiquer le prix du produit : ');
const tauxDeTva = .20;
var montantTva =(prixProduit * tauxDeTva);
console.log('Montant de TVA : ' + montantTva +' euros');

var prixTtc = ( (montantTva) + (prixProduit));
console.log('Prix TTC : ' + prixTtc + ' euros');





