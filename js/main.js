// PROBLEMA

// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// CICLO FOR CHE PARTE DA 1 FINO A 100


//DICHIARAZIONE VARIABILI 

// ciclo principale da 1 a 100
const div = document.querySelector(".container")
for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        const element = `<div class="square red">FIZZBUZZ ${i}</div>`;
        div.innerHTML += element;
    } else if ((i % 3) == 0) {
        const element = `<div class="square green">FIZZ ${i}</div>`;
        div.innerHTML += element;
    } else if ((i % 5) == 0) {
        const element = `<div class="square yellow">BUZZ ${i}</div>`;
        div.innerHTML += element;
    } else {
        const element = `<div class="square blue">${i}</div>`;
        div.innerHTML += element;
    }

}
//DENTRO AL CICLO IF CHE CONTROLLANO SE UN NUMERO è MULTIPLO DI 3 DI 5 O DI ENTRAMBI

//STAMPARE A VIDEO LE CASELLE COLORATE