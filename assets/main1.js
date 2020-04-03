// Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.

// var par1 = prompt("Inserisci la prima parola");
// var par2 = prompt("inserisci la seconda parola");
//
// var esito = parolaLunga(par1 , par2);
// console.log(esito);
//
// function parolaLunga(x , y){
//   if(x.length > y.length){
//
//     return  x + " è piu lunga";
//
//    }else if (y.length > x.length){
//
//      return y + " è piu lunga";
//
//    }else{
//
//      return "Le parole son della stessa lunghezza";
//
//    }
//
// }

// Snack 2: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// var num = parseInt(prompt("Inserisci un numero"));
//
// var esito = pariSuccessivo(num);
// console.log(esito);
//
//
// function pariSuccessivo(x){
//
//   if(x%2 == 0){
//
//     return "è pari: " + x;
//
//   }else{
//
//     return "è dispari: " + x + " Conversione: "+ (x+1);
//
//   }
//
//
//
// }

// Snack 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.

//ho voluto testare la gestione delle funzioni all'interno di altre funzioni (ognuna con i propri parametri di riferimento);

var nomi = ["Michele" , "Fabio" , "Roberto"];
var cognomi = ["Madeddu" , "Manca"  , "Nughes"];
var esito = [];
creaInvitati(esito , nomi , cognomi);
console.log(esito);

function creaInvitati(newVet , vetA , vetB){

  for(var i = 0; i <= 4; i++){

    x = creaNumero (0 , vetA.length);
    y = creaNumero (0 , vetB.length);
    newVet.push(vetA[x] + " " + vetB[y]);

  }

  return newVet;
}

function creaNumero (max , min){

  return Math.floor( Math.random() * ( max - min ) + min);

}
