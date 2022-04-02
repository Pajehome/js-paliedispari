// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma





// let enterWord = prompt('Inserisci parola');

// function palindroma (veri){

//         let parolaSplittata = enterWord.split('');
//          console.log(parolaSplittata)

//         let parolaGirata = parolaSplittata.reverse();
//           console.log(parolaGirata)

//         let parolaRiunita = parolaGirata.join('');
//            console.log(parolaRiunita)
        
//         if(enterWord === parolaRiunita){
//             alert ('la parola inserita è palindroma')
//             return true
//         }
//         else{
//             alert ('la parola inserita non è palindroma')
//             return false
//         }

// }

// let checkPalindroma = palindroma(enterWord)

// console.log(checkPalindroma)




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.




let sceltaUtente = prompt('Scegli pari o dispari');
console.log('Scelta utente:', sceltaUtente)
let numeroUtente = parseInt(prompt('Inserisci numero tra 1 e 5'));
console.log('Numero utente:', numeroUtente)
function randomNum (min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    return random
}

let numeroComputer = randomNum (1, 5);
console.log('Numero computer:', numeroComputer)

let somma = numeroUtente + numeroComputer;

function verificaSomma (numeroUtente, numeroComputer){
    if(somma % 2 == 0) {
        console.log("pari");
    }else{
        console.log('dispari')
    }
}

let pariDispari = verificaSomma(numeroUtente, numeroComputer)
console.log(pariDispari)


if(sceltaUtente === pariDispari) {
    console.log('ha vinto utente')
}else(
    console.log('ha vinto computer')
)