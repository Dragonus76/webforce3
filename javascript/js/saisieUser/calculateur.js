'use strict';
var montantHt = prompt('saisir le montant hors-taxe');
const TAUX_TVA = .20;
var montantTva = parseFloat(montantHt) * parseFloat(TAUX_TVA);
montantTva = montantTva.toFixed(2)
document.write('Pour un montant HT de ' + montantHt +' euros, il y a ' + montantTva + ' euros de TVA');

document.write('<br />');


var result= parseFloat(montantHt) + parseFloat(montantTva);
document.write('Le prix TTC de votre produit est de ' + result + ' euros');
result=result.toFixed(2);

