//var jugador1;
//var jugador2;
//console.log("vamos a jugar a pares y nones");
//
//jugador1 = prompt( 'jugador 1 , Elige un numero del 1 al 5');
//jugador2 = prompt( 'jugador 2 , Elige un numero del 1 al 5');
//jugador1 = Number( jugador1);
//jugador2 = Number( jugador2);
//var suma = jugador1 + jugador2;
//console.log(suma);
//if(suma % 2 ===0);{ 
//    console.log("Gana EL Jugador2");
//}
//else{ 
//    console.log("Gana El Jugador 1");
//     }
//
console.log('vamos a jugar a pares y nones');
var jugador1 = prompt('jugador1 dinos un numero del 1 al 5');
console.log('El jugador 1 ha sacado' + jugador1);
var jugador2 = prompt('jugador2 dinos un numero del 1 al 5');
console.log('El jugador 2 ha sacado' + jugador2);
jugador1=Number(jugador1);
jugador2=Number(jugador2);
var suma = jugador1 + jugador2;
console.log('La suma de jugada es = ' + suma);
if(suma % 2 ===0){
    console.log('El jugador 2 ha ganado');
}else{
    console.log('El jugador 1 ha ganado');
}
