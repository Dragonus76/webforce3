var button= $('#dropdown-btn');
var menuElts = $('#dropdown-list');
var fleche = $('#fleche_haut');

function hideMenu(){
	if (menuElts.is(':hidden')){
		menuElts.fadeIn(700);
	} else {
		menuElts.fadeOut();
	}
}
function hideFleche(){
	if(fleche.is(':hidden')){
		fleche.fadeIn(700);
	}else{
		fleche.fadeOut();
	}
}


function hideMenu2(event){
	if(event.target.id != "dropdown-btn" && menuElts.is(':visible')){
			menuElts.hide();
			fleche.hide();
	}
}

button.on('click', hideMenu);
button.on('click', hideFleche);
$(document).on('click', hideMenu2);