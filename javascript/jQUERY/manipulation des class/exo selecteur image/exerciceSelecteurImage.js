//1 Selection des éléments necessaire
var backgroundImage= document.querySelectorAll('ul#photo-list li');



//3 Je créer ma fonction
function changeColor(){
        this.classList.toggle('selected');
         var compteur = document.querySelectorAll('li.selected');
        document.querySelector('i').textContent = compteur.length;

}


// 2 Pose d'un écouteur d'événement
for(var i=0; i<backgroundImage.length; i++){
backgroundImage[i].addEventListener('click', changeColor);
}


