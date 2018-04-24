'user strict';

var prenom = "Marie";

if(prenom == "Fred"){
	document.write('Hello Fred');
}else if (prenom == "Marie") {
	document.write('Bonjour Marie');
}else if (prenom == "Zak") {
	document.write('Salam Alaykoum Zak');
}else{
	document.write('prenom inconnu');
}

document.write('<br>');

switch(prenom){
	case "Fred":
	document.write('Hello Fred');
	break;
	case "Marie":
	document.write('Bonjour Marie');
	break;
	case "Zak":
	document.write('Salam Alaykoum Zak');
	break;
	default: 
	document.write('prenom inconnu');
	break;
}