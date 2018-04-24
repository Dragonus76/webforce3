function getIndexFromUrl(url){
	var tab = url.split('?');
	var index = tab[1].slice(3);
	return index;
}
var index = getIndexFromUrl(window.location.href);

 $('form').on('submit', function(event) {
 
 	event.preventDefault();
    
    var firstname = $('input[name="firstname"]').val();
    var comment = $('textarea').val();

    if (firstname.length<2) {
    	$('input').next().text('Le prénom doit comporter 2 caractères minimum');
    }
    if (comment.length<10 || comment.length>100) {

    	$('textarea').next().text('Le commentaire doit être compris entre 10 et 100 caractères');
    }
 	
 
 
 
 
 
 })
