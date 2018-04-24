'user strict';
//1 Selection des éléments necessaire
    var btnElt = document.querySelector('#toggle-rectangle');
    var actionRectangle = document.querySelector('.rectangle');



//3 Je créer ma fonction
function hideRectangle(){
    actionRectangle.classList.toggle('hide');
}

function actionSouris(){
    actionRectangle.classList.toggle('good');
}
function actionSouris2(){
    actionRectangle.classList.add('important');
}
function actionSouris3(){
    actionRectangle.classList.remove('important');
}



// 2 Pose d'un écouteur d'événement
btnElt.addEventListener('click', hideRectangle);

actionRectangle.addEventListener('dblclick', actionSouris);
actionRectangle.addEventListener('mouseover', actionSouris2);
actionRectangle.addEventListener('mouseout', actionSouris3);











        // //1 Selection des éléments necessaire
        //     var btnElt = document.getElementById('btn2');
        //     var paragrapheElt = document.querySelector('p');

        //     var btnElt2 = document.querySelector('#btn1');
        //     var titreElt = document.querySelector('h1');



        // //3 Je créer ma fonction
        //      function changeColor(){
        //         paragrapheElt.classList.toggle('important');
        //     }

        //     function changeBorder(){
        //         if(titreElt.classList.contains('danger')){
        //             titreElt.classList.remove('danger');
        //         } else {
        //             titreElt.classList.add('danger');
        //         }
        //     }


        // // 2 Pose d'un écouteur d'événement
        //     btnElt.addEventListener('click', changeColor);

        //     btnElt2.addEventListener('dblclick', changeBorder);

