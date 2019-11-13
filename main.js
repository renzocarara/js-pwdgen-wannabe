// recupero gli input dall'utente
var nome = prompt("Ciao, inserisci il tuo nome:", "Mario");
var cognome = prompt("grazie " + nome + ", ora inserisci il tuo cognome:", "Rossi");
var colore = prompt("e infine inserisci il tuo colore preferito:", "giallo");


//alcuni controlli minimi sull'input dell'utente
//rimuovo eventuali spazi
nome = nome.split(' ').join('');
cognome = cognome.split(' ').join('');
// console.log("nome ripulito: ", nome);
// console.log("cognome ripulito: ", cognome);

// considero al massimo 10 caratteri sia per nome che per cognome
// per non avere password troppo lunghe
nome = nome.slice(0, 10);
cognome = cognome.slice(0, 10);
// console.log("nome tagliato: ", nome);
// console.log("cognome tagliato: ", cognome);

// altri casi da gestire:
// l'utente non inserisce nulla e preme "Cancel", mi ritrovo una stringa=null
// l'utente inserisce caratteri "particolari" non validi per una psw (apici, virgolette, punteggiatura, etc.)

// costruisco la password con gli input dell'utente
var password = nome + cognome + colore + "19";

// visualizzo la password sulla pagina HTML
document.getElementById("pwd").innerHTML = password;