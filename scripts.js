
document.write('vamos a jugar a pares y nones');
var jugador1 = prompt('jugador1 dinos un numero del 1 al 5');
console.log('El jugador 1 ha sacado' + jugador1);
var jugador2 = prompt('jugador2 dinos un numero del 1 al 5');
document.write('El jugador 2 ha sacado' + jugador2);
jugador1=Number(jugador1);
jugador2=Number(jugador2);
var suma = jugador1 + jugador2;
document.write('La suma de jugada es = ' + suma);
if(suma % 2 ===0){
    document.write('El jugador 2 ha ganado');
}else{
    document.write('El jugador 1 ha ganado');
}
