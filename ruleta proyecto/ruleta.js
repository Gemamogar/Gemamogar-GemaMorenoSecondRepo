var fotos = ["imgs/aliona.jpg", "imgs/belen.jpg", "imgs/daniel.jpg",
		"imgs/diana.jpg", "imgs/elena.jpg", "imgs/erick.jpg", "imgs/ernesto.jpg", "imgs/esther.jpg",
 		"imgs/hanan.jpg", "imgs/jaime.jpg", "imgs/joana.jpg", "imgs/juana.jpg",
 		"imgs/karen.jpg", "imgs/lali.jpg", "imgs/maelly.jpg", "imgs/magdalena.jpg",
		"imgs/maria.jpg", "imgs/marilyn.jpg","imgs/rodrigo.jpg", "imgs/santiago.jpg", "imgs/gema.jpg", "imgs/victor.jpg", 
		"imgs/yeison.jpg", "imgs/yesid.jpg"];
	
var salidas = [];//aqui en esta array se guardan las fotos que salgan elegidas(como si se guardaran)//

function ruleta(){

	var temp;
	temp=document.getElementById("foto").src=fotos[parseInt(Math.random()*fotos.length)]
    salidas.push(temp);//en esta variable push es para añadir en el array salidas la foto elegida//

    fotos.splice(fotos.indexOf(temp), 1);//aqui borra foto elegida del array fotos//

    // console log para pruebas. pintar por consola f12//
	console.log(salidas);
	console.log("Tamaño del Array salidas: " + salidas.length);
	console.log("Tamaño del Array fotos: " + fotos.length);
	console.log(fotos);

	//Si el tamño del Array es menor de 1 mostrar popup indicando que es el ultimo registro del array
	if (fotos.length < 1){
		window.alert("ultima persona de la ruleta");
	};
}

function onReset(){
	//cargamos el array de nuevo
	fotos = ["imgs/aliona.jpg", "imgs/belen.jpg", "imgs/daniel.jpg",
		"imgs/diana.jpg", "imgs/elena.jpg", "imgs/erick.jpg", "imgs/ernesto.jpg", "imgs/esther.jpg",
 		"imgs/hanan.jpg", "imgs/jaime.jpg", "imgs/joana.jpg", "imgs/juana.jpg",
 		"imgs/karen.jpg", "imgs/lali.jpg", "imgs/maelly.jpg", "imgs/magdalena.jpg",
		"imgs/maria.jpg", "imgs/marilyn.jpg","imgs/rodrigo.jpg", "imgs/santiago.jpg", "imgs/gema.jpg", "imgs/victor.jpg", 
		"imgs/yeison.jpg", "imgs/yesid.jpg"];

	// mostramos un opopup diceiendo que hemos pulsado el reset
	window.alert("Usted a pulsado reset, la ruleta comenzará otra vez.");
	document.getElementById('foto').src="imgs/botonstart.jpg";

	//consoles logs de pruebas.
	console.log("Reset Pulsado");
	salidas.splice(0);
	console.log("Array salidas:" + salidas);
	console.log("Tamaño del array salidas:" + salidas.length);
	console.log("Array fotos: " + fotos);
	console.log("Tamaño del array fotos:" + fotos.length);
}

