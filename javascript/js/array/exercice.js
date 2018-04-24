'user strict';
var date = new Date();


var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]; 
var mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

document.write("Nous sommes le, " + jours[date.getDay()] + ' ' + date.getDate() + ' ' + mois[date.getMonth()]+ ' ' + date.getFullYear());