function newPage(){
	window.location.href="details.html";
}



for(var i=0; i < movies.length; i++){
	
	var divElt = document.createElement('div');
	var imgElt = document.createElement('img');
	var titleElt = document.createElement('h2');
	var durationElt = document.createElement('h3');
	var title = document.createTextNode(movies[i].title);
	var duration = document.createTextNode(getHoursMinutes(movies[i].duration);

	function getHoursMinutes(min){
	var hours = Math.floor(min/60);
	var minutes= (min%60).toString().padStart(2, "0");

	return hours +"h" + minutes +"mn";
}
	
	divElt.className="col-lg-4 imgHover";
	imgElt.src=movies[i].image;
	imgElt.className="img-thumbnail img-responsive";

	titleElt.appendChild(title);
	durationElt.appendChild(duration);

	divElt.appendChild(imgElt);
	divElt.appendChild(titleElt);
	divElt.appendChild(durationElt);

	divElt.addEventListener('click', newPage);

	document.querySelector(".list").appendChild(divElt);

}




