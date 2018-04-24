'user strict';
var title = $('h1');
var listItems = $('li');
var images = $('img');

function changeImg(){
	images.attr('src', 'lion2.jpg');
}

title.on('click', changeImg)