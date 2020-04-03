// Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.

var par1 = prompt("Inserisci la prima parola");
var par2 = prompt("inserisci la seconda parola");

var esito = parolaLunga(par1 , par2);
console.log(esito);

function parolaLunga(x , y){
  if(x.length > y.length){

    return  x + " è piu lunga";

   }else if (y.length > x.length){

     return y + " è piu lunga";

   }else{

     return "Le parole son della stessa lunghezza";

   }

}
