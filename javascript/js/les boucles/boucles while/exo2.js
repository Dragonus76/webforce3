document.write('<h2>Table de multiplication');

var nombre = parseInt(prompt('Saisissez un nombre : '));


document.write('<table>');
document.write('<tbody>');

for(var i = 1; i <= nombre; i++){
	document.write('<tr>' );
		for(var j = 1; j <= nombre; j++){

			if(i == j){
				document.write('<td class="same-number">'+ i * j +'</td>');
			}else{
				document.write('<td>'+ i * j +'</td>');
			}
		}
	document.write('<tr>');
}

document.write('<tbody>');
document.write('</table>');
