var bombsArray = [];
var safeZone = [];
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
var difficolta = parseInt(prompt("Benvenuto! Gioca a campo minato. Decidi la difficoltà! 0: Facile. 1: Medio. 2: Difficile"));
switch (difficolta) {
  case 0:
  var numeri = 100;
    break;
  case 1:
  var numeri = 80;
    break;
  case 2:
  var numeri = 50;
    break;
  default:
  var numeri = 100;
    break;
}

bombsArray = createBombs(bombsArray, numeri);

var punteggio = minefield(bombsArray, safeZone, numeri);

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("Game Over, hai totalizzato " + punteggio + " punti");

//FUNCTIONS

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
function minefield(bombsArray, safeZone, numeri) {
  while (safeZone.length < numeri - 16) {
    // L’utente non può inserire più volte lo stesso numero.
    var numeriUtente = parseInt(prompt("Gioca a campo minato e tenta la fortuna. Inserisci un numero da 1 a 100:"));
    if (!isNaN(numeriUtente) && 1 <= numeriUtente && numeriUtente <= 100 && !safeZone.includes(numeriUtente)) {
      if (!bombsArray.includes(numeriUtente)) {// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        safeZone.push(numeriUtente);
      } else { // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        return safeZone.length;
      }
    }
  }
  return safeZone.length;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
//Generazione Bombe
function createBombs(array, max) {
  while (array.length < 16) {
    var appoggio = numberRandomGenerator(1, numeri);
    // I numeri non possono essere duplicati.
    if (!array.includes(appoggio)) {
      array.push(appoggio);
    }
  }
  return array;
}

//Generatore numeri Random
function numberRandomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min -1 )) + min;
}
