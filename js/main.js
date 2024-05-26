const Numero = prompt("Ingresar cuantos kilometros pensas recorrer hoy:");
let Numero2 = 0;
while (Numero2 <= Numero) {  
  Numero2++;
  console.log( Numero2 );
  if( Numero2 == Math.round(Numero / 2) ){
     console.log("Estamos a mitad de camino " + Numero2)
  }
   
}

// Proyecto realizado por : Alexis Liotta
// Javascripts - clase 4  " funciones"

// Objetivo: el usuario pone un numero determinado de km a realizar y el programa determinara 
//cuando se encuentre a mitad de camino.
